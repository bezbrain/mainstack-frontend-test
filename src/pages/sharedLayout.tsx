import { NavBar } from "../components/navBar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
