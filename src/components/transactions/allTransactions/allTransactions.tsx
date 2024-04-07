import { TransactionCard } from "..";

const AllTransactions = () => {
  return (
    <div>
      {Array(7)
        .fill(undefined)
        .map((_, index) => (
          <TransactionCard key={index} />
        ))}
    </div>
  );
};

export default AllTransactions;
