import type { NextApiRequest, NextApiResponse } from "next";

// Sorting functions
const bubbleSort = (arr: number[]): number[] => {
    const sorted = [...arr];
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - i - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }
    return sorted;
};

const selectionSort = (arr: number[]): number[] => {
    const sorted = [...arr];
    for (let i = 0; i < sorted.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < sorted.length; j++) {
            if (sorted[j] < sorted[minIdx]) {
                minIdx = j;
            }
        }
        [sorted[i], sorted[minIdx]] = [sorted[minIdx], sorted[i]];
    }
    return sorted;
};

const insertionSort = (arr: number[]): number[] => {
    const sorted = [...arr];
    for (let i = 1; i < sorted.length; i++) {
        const key = sorted[i];
        let j = i - 1;
        while (j >= 0 && sorted[j] > key) {
            sorted[j + 1] = sorted[j];
            j--;
        }
        sorted[j + 1] = key;
    }
    return sorted;
};

const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    const merge = (left: number[], right: number[]): number[] => {
        const sorted: number[] = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) sorted.push(left.shift()!);
            else sorted.push(right.shift()!);
        }
        return [...sorted, ...left, ...right];
    };

    return merge(left, right);
};

const quickSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = arr.slice(1).filter((item) => item < pivot);
    const right = arr.slice(1).filter((item) => item >= pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
};

// API Handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { sequence }: { sequence: number[] } = req.body;

        if (!sequence || !Array.isArray(sequence)) {
            return res.status(400).json({ error: "Invalid input. Sequence must be an array of numbers." });
        }

        // Sorting algorithms
        const algorithms = [
            { name: "Bubble Sort", func: bubbleSort },
            { name: "Selection Sort", func: selectionSort },
            { name: "Insertion Sort", func: insertionSort },
            { name: "Merge Sort", func: mergeSort },
            { name: "Quick Sort", func: quickSort },
        ];

        // Execute all algorithms asynchronously
        const results = await Promise.all(
            algorithms.map(async ({ name, func }) => {
                const start = performance.now();
                const sorted = func(sequence);
                const end = performance.now();
                return {
                    algorithm: name,
                    sorted,
                    time: end - start,
                };
            })
        );

        return res.status(200).json({ results });
    }

    return res.status(405).json({ error: "Method not allowed" });
}
