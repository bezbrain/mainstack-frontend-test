import { mainstackLogo } from "../../assets/logo";
import { GrHomeRounded } from "react-icons/gr";
import { FiBell } from "react-icons/fi";
import { MdOutlineMessage, MdInsertChartOutlined } from "react-icons/md";
import { IoReorderThreeOutline, IoCloseSharp } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { RiAppsLine, RiMenu4Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { closeNav, openNav } from "../../management/features/navSlice";
import { useState } from "react";
import { navStyles } from "./navStyles";
import { NavProfileBtn } from "../helpers/skeleton-loaders";

// White color: #f5f5f7
// Black color: #56616b

const NavBar = () => {
  const { navIsOpen } = useSelector((store: RootState) => store.navStore);

  const [isToggle, setIsToggle] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  //   OPEN THE NAV BAR
  const handleNavOpenClick = () => {
    setIsToggle(true);
    dispatch(openNav());
  };

  //   CLOSE THE NAV BAR
  const handleNavCloseClick = () => {
    setIsToggle(false);
    dispatch(closeNav());
  };

  return (
    <nav className={navStyles(navIsOpen).navBarStyle}>
      {/* Logo */}
      <a href="/" className="order-1 absolute iPad:order-1 iPad:static">
        <img src={mainstackLogo} alt="Mainstack" />
      </a>

      {!isToggle && (
        // Open Nav bar icon
        <RiMenu4Line
          className="fixed right-8 top-4 cursor-pointer text-3xl iPad:hidden"
          onClick={handleNavOpenClick}
        />
      )}
      {isToggle && (
        // Close Nav bar icon
        <IoCloseSharp
          className="fixed right-8 top-4 cursor-pointer text-3xl iPad:hidden"
          onClick={handleNavCloseClick}
        />
      )}

      {/* Middle nav items */}
      <ul
        className={`items-center absolute top-28 w-fit gap-4 transition-all iPad:flex order-3 iPad:order-2 iPad:static ${
          navIsOpen ? "" : "hidden"
        }`}
      >
        <li>
          <a href="" className={navStyles(navIsOpen).middleNavStyles}>
            <GrHomeRounded />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="" className={navStyles(navIsOpen).middleNavStyles}>
            <MdInsertChartOutlined className="text-xl" />
            <span>Analytics</span>
          </a>
        </li>
        <li>
          <a href="" className={navStyles(navIsOpen).middleNavStyles}>
            <FaMoneyBills className="text-xl" />
            <span>Revenue</span>
          </a>
        </li>
        <li>
          <a href="" className={navStyles(navIsOpen).middleNavStyles}>
            <LuUsers className="text-xl" />
            <span>CMR</span>
          </a>
        </li>
        <li>
          <a href="" className={navStyles(navIsOpen).middleNavStyles}>
            <RiAppsLine className="text-xl" />
            <span>Apps</span>
          </a>
        </li>
      </ul>

      {/* Right nav items */}
      <ul
        className={`items-center absolute top-16 gap-8 flex order-2 iPad:order-3 iPad:static iPad:flex ${
          navIsOpen ? "" : "hidden"
        }`}
      >
        <li>
          <FiBell className="text-2xl cursor-pointer" />
        </li>
        <li>
          <MdOutlineMessage className="text-2xl cursor-pointer" />
        </li>
        <li>
          <NavProfileBtn />
          {/* <button className="flex items-center bg-[#edf0f5] p-2 rounded-3xl">
            <span className="bg-[#3b4147] text-[#f5f5f7] h-[35px] w-[35px] rounded-full flex items-center justify-center">
              OJ
            </span>
            <IoReorderThreeOutline className="text-3xl mx-2" />
          </button> */}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
