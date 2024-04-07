import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NavProfileBtn = () => {
  return (
    <button className="cursor-not-allowed">
      <Skeleton width={60} height={40} />
    </button>
  );
};

export default NavProfileBtn;
