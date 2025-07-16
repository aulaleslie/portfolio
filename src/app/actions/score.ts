"use server";

import { client, edge } from "@/lib/edgedb";

export async function getCompetitions() {
    return await edge
        .select(edge.Competition, (comp) => ({
            id: true,
            name: true,
            set_count: true,
            scoring_mode: true,
        }))
        .run(client);
}

export async function getMatchesByCompetition(competitionId: string) {
    return await edge
        .select(edge.Match, (comp) => ({
            id: true,
            player_a: { id: true, name: true },
            player_b: { id: true, name: true },
            sets: { set_number: true },
            filter: edge.op(comp.competition.id, "=", edge.uuid(competitionId)),
            order_by: {
                expression: comp.created_at,
            },
        }))
        .run(client);
}

export async function submitScores(matchId: string, scores: number[][]) {
    for (let i = 0; i < scores.length; i++) {
        const [scoreA, scoreB] = scores[i];

        await edge
            .insert(edge.MatchSet, {
                match: edge.select(edge.Match, () => ({
                    filter_single: { id: matchId },
                })),
                set_number: i + 1,
                score_a: scoreA,
                score_b: scoreB,
            })
            .run(client);
    }

    return true;
}
