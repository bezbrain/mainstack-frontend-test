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
import {
  closeNav,
  openNav,
  toggleProfileDropdown,
} from "../../management/features/navSlice";
import { useEffect, useState } from "react";
import { navStyles, revenueNavStyle } from "./navStyles";
import { NavProfileBtn } from "../helpers/skeleton-loaders";
import { ProfileDropdown } from "./profileDropdown";
import userProfile from "../../management/action/userProfile.action";
import { getFirstLetter } from "../../utils/extractFirstCase";
import {
  closeFilter,
  closeTransactionStatus,
  closeTransactionType,
} from "../../management/features/filtersSlice";

const NavBar = () => {
  const { navIsOpen, isLoading, user, toggleDropdown } = useSelector(
    (store: RootState) => store.navStore
  );

  const { first_name, last_name } = user;

  // const [toggleDropdown, setToggleDropdown] = useState(false);

  const [isToggle, setIsToggle] = useState(false);

  const { pathname } = location;

  const dispatch = useDispatch<AppDispatch>();

  //   OPEN THE NAV BAR
  const handleNavOpenClick = () => {
    setIsToggle(true);
    dispatch(openNav());
  };

  // CLOSE FILTER SIDE BAR
  const handleCloseSideFilter = () => {
    dispatch(closeFilter());
    dispatch(closeTransactionType());
    dispatch(closeTransactionStatus());
  };

  //   CLOSE THE NAV BAR
  const handleNavCloseClick = () => {
    setIsToggle(false);
    // setToggleDropdown(false);
    dispatch(toggleProfileDropdown());
    dispatch(closeNav());
  };

  const handleProfileDropdownClick = () => {
    // setToggleDropdown(!toggleDropdown);
    dispatch(toggleProfileDropdown());
  };

  useEffect(() => {
    dispatch(userProfile());
  }, []);

  return (
    <nav
      className={navStyles(navIsOpen).navBarStyle}
      onClick={handleCloseSideFilter}
      data-testid="nav-bar"
    >
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
          <a
            href=""
            className={`${
              navStyles(navIsOpen).middleNavStyles
            } iPad:hover:bg-[#edf0f5]`}
          >
            <GrHomeRounded />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href=""
            className={`${
              navStyles(navIsOpen).middleNavStyles
            } iPad:hover:bg-[#edf0f5]`}
          >
            <MdInsertChartOutlined className="text-xl" />
            <span>Analytics</span>
          </a>
        </li>
        <li>
          <a
            href=""
            className={`${navStyles(navIsOpen).middleNavStyles} ${
              pathname == "/revenue" && !toggleDropdown ? revenueNavStyle() : ""
            }`}
          >
            <FaMoneyBills className="text-xl" />
            <span>Revenue</span>
          </a>
        </li>
        <li>
          <a
            href=""
            className={`${
              navStyles(navIsOpen).middleNavStyles
            } iPad:hover:bg-[#edf0f5]`}
          >
            <LuUsers className="text-xl" />
            <span>CMR</span>
          </a>
        </li>
        <li>
          <a
            href=""
            className={`${
              navStyles(navIsOpen).middleNavStyles
            } iPad:hover:bg-[#edf0f5]`}
          >
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
        <li className="relative">
          {isLoading ? (
            <NavProfileBtn />
          ) : (
            <button
              className="flex items-center bg-[#edf0f5] p-2 rounded-3xl"
              onClick={handleProfileDropdownClick}
              data-testid="toggle-dropdown"
            >
              <span className="bg-[#3b4147] text-[#f5f5f7] h-[35px] w-[35px] rounded-full flex items-center justify-center">
                {getFirstLetter(first_name)}
                {getFirstLetter(last_name)}
              </span>
              <IoReorderThreeOutline className="text-3xl mx-2" />
            </button>
          )}
          {toggleDropdown && <ProfileDropdown />}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
