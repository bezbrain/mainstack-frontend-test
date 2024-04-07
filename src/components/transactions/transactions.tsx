import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

const Transactions = () => {
  return (
    <section className="mt-16">
      <header className="flex justify-between">
        {/* Left hand side */}
        <div>
          <h1>
            <span>24</span> Transactions
          </h1>
          <p>Your transactions for the last 7 days</p>
        </div>
        {/* Right hand side */}
        <div>
          <button>
            <span>Filter</span>
            <FaAngleDown />
          </button>
          <button>
            <span>Export List</span>
            <MdOutlineFileDownload />
          </button>
        </div>
      </header>
    </section>
  );
};

export default Transactions;
