"use client";

import { useState } from "react";
import axios from "axios";

export default function SortingDemo() {
    const [sequence, setSequence] = useState<string>(""); // User input sequence
    const [generateNumber, setGenerateNumber] = useState<string>(""); // Number of elements to generate
    const [results, setResults] = useState<
        { algorithm: string; sorted: number[]; time: number }[]
    >([]);
    const [error, setError] = useState<string | null>(null); // Validation error
    const [loading, setLoading] = useState<boolean>(false); // Loading state
    const [expanded, setExpanded] = useState<number | null>(null); // Collapsed state for sorted results

    // Validate and parse user input
    const validateSequence = (input: string): number[] | null => {
        const trimmedInput = input.trim();
        if (!trimmedInput) {
            setError("Input cannot be empty.");
            return null;
        }

        const items = trimmedInput
            .split(",")
            .map((item) => item.trim())
            .filter((item) => !isNaN(Number(item)))
            .map(Number);

        if (items.length === 0) {
            setError("Input must be a list of numbers separated by commas.");
            return null;
        }

        setError(null); // Clear any previous error
        return items;
    };

    // Handle Sorting (API Call)
    const handleSort = async () => {
        const items = validateSequence(sequence);
        if (!items) {
            setResults([]);
            return;
        }

        setLoading(true); // Show loading indicator
        setResults([]); // Reset previous results

        try {
            const response = await axios.post("/api/sort", { sequence: items });
            setResults(response.data.results);
        } catch (err) {
            setError("An error occurred while sorting. Please try again.");
        } finally {
            setLoading(false); // Hide loading indicator
        }
    };

    // Handle Sequence Generation
    const handleGenerateSequence = () => {
        const num = parseInt(generateNumber, 10);
        if (isNaN(num) || num <= 0) {
            setError("Please enter a valid positive number.");
            return;
        }

        if (num > 10000) {
            setError("Max number allowed is 1000.");
            return;
        }

        const randomSequence = Array.from({ length: num }, () =>
            Math.floor(Math.random() * 100)
        );
        setSequence(randomSequence.join(", "));
        setError(null); // Clear any previous error
    };

    // Toggle expanded state for sorted results
    const toggleExpanded = (index: number) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <section className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold mb-8">Sorting Algorithm Demo</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                    Input a sequence, generate one, and see how different sorting
                    algorithms perform.
                </p>

                {/* Input Section */}
                <div className="mb-8">
                    <textarea
                        value={sequence}
                        onChange={(e) => setSequence(e.target.value)}
                        placeholder="E.g., 3, 2, 1"
                        className="w-full p-4 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 text-lg"
                        rows={4}
                    ></textarea>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                {/* Generate Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Generate Random Sequence</h2>
                    <input
                        type="text"
                        value={generateNumber}
                        onChange={(e) => setGenerateNumber(e.target.value)}
                        placeholder="Enter number of elements"
                        className="p-4 w-full sm:w-auto rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-500 focus:border-green-500 text-lg"
                    />
                    <button
                        onClick={handleGenerateSequence}
                        className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        Generate
                    </button>
                </div>

                {/* Sort Button */}
                <div className="mb-8">
                    <button
                        onClick={handleSort}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        {loading ? "Sorting..." : "Sort"}
                    </button>
                </div>

                {/* Results */}
                {results.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Results</h2>
                        {results.map((result, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"
                            >
                                <p className="font-bold">{result.algorithm}</p>
                                <p>Execution Time: {result.time.toFixed(2)} ms</p>
                                <button
                                    onClick={() => toggleExpanded(index)}
                                    className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                >
                                    {expanded === index ? "Hide Sorted Sequence" : "Show Sorted Sequence"}
                                </button>
                                {expanded === index && (
                                    <p className="mt-2 text-sm">{result.sorted.join(", ")}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
