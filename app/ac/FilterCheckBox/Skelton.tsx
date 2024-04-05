export const Skelton = () => {
    return (
        <div role="status" className="animate-pulse space-y-3">
             {[...Array(8)].map((_, index) => (
                <div key={index} className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
            ))}
        </div>
    );
  };
  