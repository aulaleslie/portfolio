'use client';

import { getCompetitions } from '@/app/actions/matchGeneration';
import { getMatchesByCompetition, submitScores } from '@/app/actions/score';
import { useEffect, useState } from 'react';

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

type MatchInfo = {
    id: string;
    player_a: { id: string; name: string };
    player_b: { id: string; name: string };
    sets: { set_number: number }[];
};

export default function ScoreInput() {
    const [competitions, setCompetitions] = useState<FullCompetition[]>([]);
    const [selectedId, setSelectedId] = useState<string>('');
    const [matches, setMatches] = useState<MatchInfo[]>([]);
    const [scores, setScores] = useState<Record<string, number[][]>>({});
    const [setCount, setSetCount] = useState<number>(3);
    const [scoringMode, setScoringMode] = useState<'SetWins' | 'SumScore'>('SetWins');

    useEffect(() => {
        getCompetitions().then(setCompetitions);
    }, []);

    useEffect(() => {
        if (!selectedId) return;

        const comp = competitions.find((c) => c.id === selectedId);
        if (!comp) return;

        setSetCount(comp.set_count);
        setScoringMode(comp.scoring_mode);

        getMatchesByCompetition(selectedId).then((data: MatchInfo[]) => {
            setMatches(data);

            const initialScores: Record<string, number[][]> = {};
            data.forEach((m) => {
                initialScores[m.id] = Array.from({ length: comp.set_count }, () => [0, 0]);
            });
            setScores(initialScores);
        });
    }, [selectedId, competitions]);

    const handleScoreChange = (
        matchId: string,
        setIndex: number,
        playerIndex: number,
        value: number
    ) => {
        setScores((prev) => {
            const updated = [...(prev[matchId] || [])];
            updated[setIndex] = [...(updated[setIndex] || [0, 0])];
            updated[setIndex][playerIndex] = value;
            return { ...prev, [matchId]: updated };
        });
    };

    const handleSubmitScores = async (matchId: string) => {
        const setScores = scores[matchId];
        if (!setScores) return;

        await submitScores(matchId, setScores);
        alert('✅ Scores submitted!');
    };

    return (
        <div className="space-y-6">
            <select
                className="w-full border p-2 rounded"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
            >
                <option value="">Select a competition</option>
                {competitions.map((c) => (
                    <option key={c.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>

            {matches.map((match) => (
                <div key={match.id} className="border rounded p-4 space-y-2">
                    <p className="font-semibold">
                        {match.player_a.name} vs {match.player_b.name}
                    </p>
                    {scores[match.id]?.map(([a, b], i) => (
                        <div key={i} className="flex gap-2 items-center">
                            <span>Set {i + 1}</span>
                            <input
                                type="number"
                                className="w-16 border p-1 rounded text-center"
                                value={a}
                                onChange={(e) =>
                                    handleScoreChange(match.id, i, 0, parseInt(e.target.value))
                                }
                            />
                            <span>-</span>
                            <input
                                type="number"
                                className="w-16 border p-1 rounded text-center"
                                value={b}
                                onChange={(e) =>
                                    handleScoreChange(match.id, i, 1, parseInt(e.target.value))
                                }
                            />
                        </div>
                    ))}
                    <button
                        className="bg-green-600 text-white px-3 py-1 rounded mt-2"
                        onClick={() => handleSubmitScores(match.id)}
                    >
                        Submit Scores
                    </button>
                </div>
            ))}
        </div>
    );
}
