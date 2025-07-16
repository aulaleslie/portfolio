// app/actions/createCompetition.ts
"use server";

import { client, edge } from "@/lib/edgedb";

export async function createCompetition(data: {
    name: string;
    setCount: number;
    matchFormat: "Single" | "HomeAway";
    scoringMode: "SumScore" | "SetWins";
    participants: string;
}) {

    console.log("Creating competition with data:", data);
    const playerNames = data.participants
        .split(",")
        .map((n) => n.trim())
        .filter((n) => n.length > 0);

    const playerExprs = playerNames.map((name) =>
        edge
            .insert(edge.Player, { name })
            .unlessConflict((player) => ({
                on: player.name,
                else: player,
            }))
    );

    await edge
        .insert(edge.Competition, {
            name: data.name,
            set_count: data.setCount,
            match_format: data.matchFormat,
            scoring_mode: data.scoringMode,
            participants: edge.set(...playerExprs),
        })
        .run(client);
}
