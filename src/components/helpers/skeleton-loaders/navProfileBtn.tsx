import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NavProfileBtn = () => {
  return (
    <button className="cursor-not-allowed">
      <Skeleton width={100} height={45} borderRadius={30} />
    </button>
  );
};

export default NavProfileBtn;
