export default function DemosPage() {
    return (
        <section className="w-full bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-8">
                    Backend Development Demos
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
                    Explore my backend development skills through interactive demos such as asynchronous programming, queuing systems, and sorting performance comparisons.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-4">Asynchronous Demo</h2>
                        <p>Explore how asynchronous programming improves performance.</p>
                    </div>
                    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-4">Queuing System</h2>
                        <p>Visualize task queues and learn how they work in real time.</p>
                    </div>
                    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-4">Sorting Performance</h2>
                        <p>Compare the performance of different sorting algorithms.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
