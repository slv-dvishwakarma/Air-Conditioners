export const Skeleton = () => {
    return (
        <div className="sm:grid grid-cols-1 gap-8">
            <div role="status" className="sm:grid grid-cols-5 gap-8 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 py-10 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-6 animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 grid-item col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 grid-item col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1 space-y-5">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    ))}
                </div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 grid-item col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1 space-y-5">
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    ))}
                </div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 grid-item col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1 space-y-5">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    ))}
                </div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 grid-item col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1 space-y-5">
                    {[...Array(7)].map((_, index) => (
                        <div key={index} className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    ))}
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
