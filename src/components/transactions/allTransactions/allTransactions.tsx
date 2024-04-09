import { useEffect, useState } from "react";
import { NotFound, TransactionCard } from "..";
import { TransactionLoader } from "../../helpers/skeleton-loaders";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import allTransactions from "../../../management/action/transactions.action";
import {
  TransactionProps,
  initiateFilters,
} from "../../../management/features/transactionSlice";
import {
  closeFilter,
  closeTransactionStatus,
  closeTransactionType,
} from "../../../management/features/filtersSlice";

const AllTransactions = () => {
  const { istransLoading, transactions } = useSelector(
    (store: RootState) => store.transactionStore
  );
  const dispatch = useDispatch<AppDispatch>();

  const [sortTransactions, setSortTransactions] = useState<
    TransactionProps["transactions"]
  >([]);

  // CLOSE THE FILTER SIDE BAR AND THE TRANSACTION TYPE DROP DOWN
  const handleAllTranasctionClick = () => {
    dispatch(closeFilter());
    dispatch(closeTransactionType());
    dispatch(closeTransactionStatus());
  };

  // GET ALL TRANSACTIONS
  useEffect(() => {
    dispatch(allTransactions());
  }, []);

  useEffect(() => {
    // Sort the data based on the date field in ascending order
    const sortedTransactions = [...transactions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    // console.log(sortedTransactions);
    setSortTransactions(sortedTransactions);
  }, [transactions]);

  if (transactions.length === 0) {
    return <NotFound />;
  }

  return (
    <div onClick={handleAllTranasctionClick}>
      {istransLoading ? (
        <TransactionLoader />
      ) : (
        <div>
          {sortTransactions?.map((each, i) => {
            const { metadata, type, amount, date, status } = each;
            return (
              <TransactionCard
                key={i}
                productName={metadata?.product_name || "Cash Withdrawal"}
                name={metadata?.name || "No Name"}
                amount={amount}
                date={date}
                type={type}
                status={status}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllTransactions;
