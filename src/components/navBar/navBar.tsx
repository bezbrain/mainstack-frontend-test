import { mainstackLogo } from "../../assets/logo";
import { GrHomeRounded } from "react-icons/gr";
import { FiBell } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";

const NavBar = () => {
  return (
    <nav>
      <img src={mainstackLogo} alt="Mainstack" />
      <ul>
        <li>
          <a href="">
            <GrHomeRounded />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="">
            <GrHomeRounded />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="">
            <GrHomeRounded />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="">
            <GrHomeRounded />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="">
            <GrHomeRounded />
            <span>Home</span>
          </a>
        </li>
      </ul>

      <ul>
        <FiBell />
        <MdOutlineMessage />
      </ul>
    </nav>
  );
};

export default NavBar;
