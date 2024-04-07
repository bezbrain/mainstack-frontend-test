import { TransactionCard } from "..";
import { TransactionLoader } from "../../helpers/skeleton-loaders";

const AllTransactions = () => {
  return (
    <>
      {true ? (
        <TransactionLoader />
      ) : (
        <div>
          {Array(7)
            .fill(undefined)
            .map((_, index) => (
              <TransactionCard key={index} />
            ))}
        </div>
      )}
    </>
  );
};

export default AllTransactions;
