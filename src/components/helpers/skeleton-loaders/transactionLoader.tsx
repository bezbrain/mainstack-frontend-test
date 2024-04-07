import Skeleton from "react-loading-skeleton";

const TransactionLoader = () => {
  return (
    <>
      {Array(5)
        .fill(undefined)
        .map((_, i) => {
          return (
            <div
              className="flex items-center gap-4 justify-between mt-6"
              key={i}
            >
              {/* Left hand side */}
              <div className="flex items-center gap-4 leading-6 w-[200px] iPhone:w-[250px] md:w-[400px] xl:w-[600px]">
                <Skeleton width={48} height={48} />
                <div className="w-full">
                  <Skeleton height={50} />
                </div>
              </div>
              {/* Right hand side */}
              <div className="w-[20%]">
                <Skeleton height={25} />
                <Skeleton height={15} />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default TransactionLoader;
