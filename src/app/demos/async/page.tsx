"use client";

import { useState } from "react";

export default function AsyncDemo() {
    const [blockingResult, setBlockingResult] = useState<number | null>(0); // Default result: 0
    const [nonBlockingResult, setNonBlockingResult] = useState<number | null>(0); // Default result: 0
    const [blockingTime, setBlockingTime] = useState<number | null>(0); // Default time: 0 ms
    const [nonBlockingTime, setNonBlockingTime] = useState<number | null>(0); // Default time: 0 ms
    const [isBlockingCalculating, setIsBlockingCalculating] = useState(false); // For spinner
    const [isNonBlockingCalculating, setIsNonBlockingCalculating] = useState(false); // For spinner
    const [counter, setCounter] = useState(0);

    // Fibonacci function (intentionally slow for demonstration)
    const fibonacci = (n: number): number => {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    };

    // Blocking Example
    const handleBlocking = () => {
        setBlockingResult(0); // Reset result
        setBlockingTime(0); // Reset time
        setIsBlockingCalculating(true); // Show spinner

        const startTime = performance.now();
        const result = fibonacci(40); // Blocking task
        const endTime = performance.now();

        setBlockingResult(result);
        setBlockingTime(endTime - startTime); // Calculate execution time
        setIsBlockingCalculating(false); // Hide spinner
    };

    // Non-Blocking Example
    const handleNonBlocking = () => {
        setNonBlockingResult(0); // Reset result
        setNonBlockingTime(0); // Reset time
        setIsNonBlockingCalculating(true); // Show spinner

        const startTime = performance.now();

        const calculateAsync = (n: number): Promise<number> =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(fibonacci(n));
                }, 0); // Simulate async task
            });

        calculateAsync(40).then((result) => {
            const endTime = performance.now();
            setNonBlockingResult(result);
            setNonBlockingTime(endTime - startTime); // Calculate execution time
            setIsNonBlockingCalculating(false); // Hide spinner
        });
    };

    // Simulate UI responsiveness
    const incrementCounter = () => {
        setCounter((prev) => prev + 1);
    };

    return (
        <section className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold mb-8">Asynchronous Programming Demo</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                    Explore the difference between blocking and non-blocking code execution in JavaScript.
                </p>

                {/* Blocking Example */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Blocking Example</h2>
                    <button
                        onClick={handleBlocking}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        disabled={isBlockingCalculating} // Disable button while calculating
                    >
                        {isBlockingCalculating ? "Calculating..." : "Run Blocking Task"}
                    </button>
                    <p className="mt-4">
                        Result:{" "}
                        <span className="text-green-500">{blockingResult}</span>
                    </p>
                    <p className="mt-2">
                        Time Taken:{" "}
                        <span className="text-blue-500">{blockingTime?.toFixed(2)} ms</span>
                    </p>
                </div>

                {/* Non-Blocking Example */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Non-Blocking Example</h2>
                    <button
                        onClick={handleNonBlocking}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        disabled={isNonBlockingCalculating} // Disable button while calculating
                    >
                        {isNonBlockingCalculating ? "Calculating..." : "Run Non-Blocking Task"}
                    </button>
                    <p className="mt-4">
                        Result:{" "}
                        <span className="text-green-500">{nonBlockingResult}</span>
                    </p>
                    <p className="mt-2">
                        Time Taken:{" "}
                        <span className="text-blue-500">{nonBlockingTime?.toFixed(2)} ms</span>
                    </p>
                </div>

                {/* Counter to Show UI Responsiveness */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">UI Responsiveness</h2>
                    <button
                        onClick={incrementCounter}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Increment Counter
                    </button>
                    <p className="mt-4">
                        Counter: <span className="text-blue-500">{counter}</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
