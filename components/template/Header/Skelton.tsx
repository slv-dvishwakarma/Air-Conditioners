export const Skelton = () => {
    return (
        <div role="status" className="sm:grid grid-cols-12 gap-10 items-center py-5 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-6 animate-pulse ">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 grid-item col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 flex justify-between items-center gap-[50px]"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 grid-item col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-6 flex justify-between items-center gap-[50px]"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 grid-item col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 flex justify-between items-center gap-[50px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
