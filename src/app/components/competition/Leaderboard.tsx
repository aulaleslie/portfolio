'use client';

import { getCompetitions } from '@/app/actions/matchGeneration';
import { getLeaderboard } from '@/app/actions/leaderboard';
import { useEffect, useState } from 'react';

type Competition = {
    id: string;
    name: string;
};

type LeaderboardEntry = {
    id: string;
    name: string;
    points: number;
    setsWon: number;
};

export default function Leaderboard() {
    const [competitions, setCompetitions] = useState<Competition[]>([]);
    const [selectedId, setSelectedId] = useState<string>('');
    const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

    useEffect(() => {
        getCompetitions().then(setCompetitions);
    }, []);

    useEffect(() => {
        if (!selectedId) return;
        getLeaderboard(selectedId).then(setEntries);
    }, [selectedId]);

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

            {entries.length > 0 && (
                <table className="w-full text-left border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2">#</th>
                            <th className="p-2">Player</th>
                            <th className="p-2">Points</th>
                            <th className="p-2">Sets Won</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry, i) => (
                            <tr key={entry.id} className="border-t">
                                <td className="p-2">{i + 1}</td>
                                <td className="p-2">{entry.name}</td>
                                <td className="p-2">{entry.points}</td>
                                <td className="p-2">{entry.setsWon}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
