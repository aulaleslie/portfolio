'use client';

import { generateMatches, getCompetitions } from '@/app/actions/matchGeneration';
import { useEffect, useState } from 'react';

type SlimCompetition = {
    id: string;
    name: string;
    match_format: 'Single' | 'HomeAway';
    participants: { id: string; name: string }[];
};

export default function MatchGeneration() {
    const [competitions, setCompetitions] = useState<SlimCompetition[]>([]);
    const [selectedId, setSelectedId] = useState<string>('');
    const [generating, setGenerating] = useState(false);
    const [status, setStatus] = useState('');

    useEffect(() => {
        getCompetitions().then(setCompetitions);
    }, []);

    const handleGenerate = async () => {
        setGenerating(true);
        setStatus('');

        try {
            const total = await generateMatches(selectedId);
            setStatus(`✅ ${total} match(es) generated`);
        } catch (err: any) {
            console.error('Error generating matches', err);
            setStatus(err.message || '❌ Failed to generate matches');
        } finally {
            setGenerating(false);
        }
    };

    return (
        <div className="space-y-4">
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

            <button
                className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
                onClick={handleGenerate}
                disabled={generating || !selectedId}
            >
                {generating ? 'Generating...' : 'Generate Matches'}
            </button>

            {status && <p className="text-sm">{status}</p>}
        </div>
    );
}
