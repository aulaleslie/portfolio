"use server";

import { client, edge } from "@/lib/edgedb";

export type CompetitionBase = {
    id: string;
    name: string;
};

export type CompetitionWithFormat = CompetitionBase & {
    match_format: "Single" | "HomeAway";
    participants: { id: string; name: string }[];
};

export type CompetitionWithScoring = CompetitionBase & {
    set_count: number;
    scoring_mode: "SetWins" | "SumScore";
};

type FullCompetition = CompetitionWithFormat & CompetitionWithScoring;

export async function getCompetitions(): Promise<FullCompetition[]> {
    return await edge
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .select(edge.Competition, (comp) => ({
            id: true,
            name: true,
            set_count: true,
            scoring_mode: true,
            match_format: true,
            participants: { id: true, name: true },
        }))
        .run(client);
}

export async function generateMatches(competitionId: string) {
    const comp = await edge
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .select(edge.Competition, (c) => ({
            id: true,
            match_format: true,
            participants: { id: true },
            filter_single: { id: competitionId },
        }))
        .run(client);

    if (!comp || comp.participants.length < 2) {
        throw new Error("❌ Invalid competition or fewer than 2 participants");
    }

    const matchPairs: [string, string][] = [];

    for (let i = 0; i < comp.participants.length; i++) {
        for (let j = i + 1; j < comp.participants.length; j++) {
            matchPairs.push([comp.participants[i].id, comp.participants[j].id]);
            if (comp.match_format === "HomeAway") {
                matchPairs.push([
                    comp.participants[j].id,
                    comp.participants[i].id,
                ]);
            }
        }
    }

    for (const [playerAId, playerBId] of matchPairs) {
        await edge
            .insert(edge.Match, {
                competition: edge.select(edge.Competition, () => ({
                    filter_single: { id: competitionId },
                })),
                player_a: edge.select(edge.Player, () => ({
                    filter_single: { id: playerAId },
                })),
                player_b: edge.select(edge.Player, () => ({
                    filter_single: { id: playerBId },
                })),
            })
            .run(client);
    }

    return matchPairs.length;
}
