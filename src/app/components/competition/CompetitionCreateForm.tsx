"use client";

import { useState, useTransition } from "react";
import { createCompetition } from "@/app/actions/createCompetition";

const matchFormats = ["Single", "HomeAway"] as const;
const scoringModes = ["SumScore", "SetWins"] as const;

export default function CompetitionCreateForm() {
    const [name, setName] = useState("");
    const [setCount, setSetCount] = useState(3);
    const [matchFormat, setMatchFormat] = useState<"Single" | "HomeAway">("Single");
    const [scoringMode, setScoringMode] = useState<"SumScore" | "SetWins">("SetWins");
    const [participants, setParticipants] = useState("");
    const [created, setCreated] = useState(false);

    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCreated(false);

        startTransition(async () => {
            try {
                await createCompetition({
                    name,
                    setCount,
                    matchFormat,
                    scoringMode,
                    participants,
                });

                setCreated(true);
                setName("");
                setSetCount(3);
                setMatchFormat("Single");
                setScoringMode("SetWins");
                setParticipants("");
            } catch (err) {
                console.error("❌ Failed to create competition:", err);
                alert("Error creating competition");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Competition name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded"
                required
            />
            <input
                type="number"
                placeholder="Set count"
                value={setCount}
                onChange={(e) => setSetCount(parseInt(e.target.value))}
                min={1}
                max={5}
                className="w-full border p-2 rounded"
            />
            <select
                value={matchFormat}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e) => setMatchFormat(e.target.value as any)}
                className="w-full border p-2 rounded"
            >
                {matchFormats.map((m) => (
                    <option key={m} value={m}>
                        {m}
                    </option>
                ))}
            </select>
            <select
                value={scoringMode}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e) => setScoringMode(e.target.value as any)}
                className="w-full border p-2 rounded"
            >
                {scoringModes.map((m) => (
                    <option key={m} value={m}>
                        {m}
                    </option>
                ))}
            </select>
            <textarea
                placeholder="Participants (comma-separated)"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
                rows={3}
                className="w-full border p-2 rounded"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={isPending}
            >
                {isPending ? "Creating..." : "Create Competition"}
            </button>
            {created && (
                <p className="text-green-600 font-medium">✅ Competition created!</p>
            )}
        </form>
    );
}
