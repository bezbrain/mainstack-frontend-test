import { mainstackLogo } from "../../assets/logo";
import { GrHomeRounded } from "react-icons/gr";
import { FiBell } from "react-icons/fi";
import { MdOutlineMessage, MdInsertChartOutlined } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { RiAppsLine, RiMenu4Line } from "react-icons/ri";

// White color: #f5f5f7
// Black color: #56616b

const middleNavStyles = `flex items-center gap-[5px] transition-all py-2 rounded-3xl iPad:px-4 iPad:hover:bg-[#edf0f5]`;

const NavBar = () => {
  return (
    <nav
      className={`flex flex-col h-[320px] bg-[#fff] z-10 mt-4 shadow-md px-4 py-2 w-full absolute iPad:flex-row iPad:rounded-full iPad:justify-between iPad:items-center iPad:h-fit`}
    >
      {/* Logo */}
      <a href="/" className="order-1 absolute iPad:order-1 iPad:static">
        <img src={mainstackLogo} alt="Mainstack" />
      </a>

      <RiMenu4Line className="fixed right-8 top-8 cursor-pointer text-3xl iPad:hidden" />

      {/* Middle nav items */}
      <ul className="items-center absolute top-28 w-fit gap-4 transition-all iPad:flex order-3 iPad:order-2 iPad:static">
        <li>
          <a href="" className={middleNavStyles}>
            <GrHomeRounded />
            <span className="mt-0 hover:mt-0 iPad:mt-1">Home</span>
          </a>
        </li>
        <li>
          <a href="" className={middleNavStyles}>
            <MdInsertChartOutlined className="text-xl" />
            <span>Analytics</span>
          </a>
        </li>
        <li>
          <a href="" className={middleNavStyles}>
            <FaMoneyBills className="text-xl" />
            <span>Revenue</span>
          </a>
        </li>
        <li>
          <a href="" className={middleNavStyles}>
            <LuUsers className="text-xl" />
            <span>CMR</span>
          </a>
        </li>
        <li>
          <a href="" className={middleNavStyles}>
            <RiAppsLine className="text-xl" />
            <span>Apps</span>
          </a>
        </li>
      </ul>

      {/* Right nav items */}
      <ul className="items-center absolute top-16 gap-8 flex order-2 iPad:order-3 iPad:static">
        <li>
          <FiBell className="text-2xl cursor-pointer" />
        </li>
        <li>
          <MdOutlineMessage className="text-2xl cursor-pointer" />
        </li>
        <li>
          <button className="flex items-center bg-[#edf0f5] p-2 rounded-3xl">
            <span className="bg-[#3b4147] text-[#f5f5f7] h-[35px] w-[35px] rounded-full flex items-center justify-center">
              OJ
            </span>
            <IoReorderThreeOutline className="text-3xl mx-2" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
