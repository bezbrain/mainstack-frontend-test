import { SectionWrapper } from "../general/wrappers";
import { AllTransactions, TransHeader } from ".";
import { Filter } from "./filters";

const Transactions = () => {
  return (
    <SectionWrapper className="my-16">
      <TransHeader />

      <hr className="mt-4 mb-6" />

      <AllTransactions />

      <Filter />
    </SectionWrapper>
  );
};

export default Transactions;
