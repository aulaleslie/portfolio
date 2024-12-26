"use client";

import { useState } from "react";

export default function QueueDemo() {
    // Queue state
    const [queue, setQueue] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [processing, setProcessing] = useState<boolean>(false);

    // Enqueue operation
    const enqueue = () => {
        if (!inputValue.trim()) return;
        setQueue((prevQueue) => [...prevQueue, inputValue.trim()]);
        setInputValue(""); // Clear the input field
    };

    // Dequeue operation
    const dequeue = () => {
        if (queue.length === 0) return;
        setQueue((prevQueue) => prevQueue.slice(1)); // Remove the first item
    };

    // Clear the queue
    const clearQueue = () => {
        setQueue([]);
    };

    // Process the queue with a delay
    const processQueue = () => {
        if (processing || queue.length === 0) return;
        setProcessing(true);

        const interval = setInterval(() => {
            setQueue((prevQueue) => {
                if (prevQueue.length === 1) {
                    clearInterval(interval); // Stop processing when the queue is empty
                    setProcessing(false);
                }
                return prevQueue.slice(1); // Dequeue one item
            });
        }, 1000); // Process one item every second
    };

    return (
        <section className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold mb-8">Queue Demo</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                    Interact with the queue by adding, removing, and processing items.
                </p>

                {/* Input and Controls */}
                <div className="mb-8">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter a value"
                        className="p-4 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 text-lg w-full sm:w-auto"
                    />
                    <button
                        onClick={enqueue}
                        className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        Enqueue
                    </button>
                    <button
                        onClick={dequeue}
                        className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                        Dequeue
                    </button>
                    <button
                        onClick={clearQueue}
                        className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                        Clear Queue
                    </button>
                    <button
                        onClick={processQueue}
                        disabled={processing}
                        className={`ml-4 px-4 py-2 rounded-lg text-white ${processing ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                            }`}
                    >
                        {processing ? "Processing..." : "Process Queue"}
                    </button>
                </div>

                {/* Queue Visualization */}
                <div
                    id="queue-visual"
                    className="flex justify-center items-center gap-4 border-2 border-gray-300 dark:border-gray-600 p-4 rounded-lg min-h-[80px]"
                >
                    {queue.length === 0 ? (
                        <p className="text-gray-500 dark:text-gray-400">The queue is empty</p>
                    ) : (
                        queue.map((item, index) => (
                            <div
                                key={index}
                                className="p-2 bg-green-500 text-white rounded-md text-lg font-semibold"
                            >
                                {item}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
