"use server";

import { client, edge } from "@/lib/edgedb";

export async function getLeaderboard(competitionId: string) {
    const matches = await edge
        .select(edge.Match, (m) => ({
            id: true,
            competition: { id: true, scoring_mode: true },
            player_a: { id: true, name: true },
            player_b: { id: true, name: true },
            sets: {
                set_number: true,
                score_a: true,
                score_b: true,
            },
            filter: edge.op(m.competition.id, "=", edge.uuid(competitionId)),
        }))
        .run(client);

    const scores: Record<
        string,
        { name: string; points: number; setsWon: number }
    > = {};

    for (const match of matches) {
        const { player_a, player_b, sets } = match;

        if (!scores[player_a.id]) {
            scores[player_a.id] = {
                name: player_a.name,
                points: 0,
                setsWon: 0,
            };
        }
        if (!scores[player_b.id]) {
            scores[player_b.id] = {
                name: player_b.name,
                points: 0,
                setsWon: 0,
            };
        }

        for (const set of sets) {
            if (match.competition.scoring_mode === "SumScore") {
                scores[player_a.id].points += set.score_a;
                scores[player_b.id].points += set.score_b;
            } else {
                // SetWins logic
                if (set.score_a > set.score_b) scores[player_a.id].setsWon += 1;
                else if (set.score_b > set.score_a) {
                    scores[player_b.id].setsWon += 1;
                }
                // draw does nothing
            }
        }
    }

    const result = Object.entries(scores).map((
        [id, { name, points, setsWon }],
    ) => ({
        id,
        name,
        points,
        setsWon,
    }));

    return result.sort((a, b) =>
        matches[0]?.competition.scoring_mode === "SumScore"
            ? b.points - a.points
            : b.setsWon - a.setsWon
    );
}
