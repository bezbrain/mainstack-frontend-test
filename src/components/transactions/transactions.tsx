import { SectionWrapper } from "../general/wrappers";
import { AllTransactions, TransHeader } from ".";

const Transactions = () => {
  return (
    <SectionWrapper className="mt-16">
      <TransHeader />

      <hr className="mt-4 mb-6" />

      <AllTransactions />
    </SectionWrapper>
  );
};

export default Transactions;
