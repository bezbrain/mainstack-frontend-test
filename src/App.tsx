import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Hero } from "./components/hero";
import { NavBar } from "./components/navBar";
import { Transactions } from "./components/transactions";
import { SideIcons } from "./components/sideIcons";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { closeModal } from "./management/features/transactionSlice";
import {
  closeFilter,
  closeTransactionStatus,
  closeTransactionType,
} from "./management/features/filtersSlice";

const App = () => {
  const { isModal } = useSelector((store: RootState) => store.transactionStore);

  const dispatch = useDispatch<AppDispatch>();

  const closeModalClick = () => {
    dispatch(closeFilter());
    dispatch(closeTransactionType());
    dispatch(closeTransactionStatus());
    dispatch(closeModal());
  };

  return (
    <main className="mx-4">
      {isModal && <FilterModal onClick={closeModalClick} />}
      <SideIcons />
      <NavBar />
      <Hero />
      <Transactions />
      <ToastContainer position="bottom-right" autoClose={5000} />
    </main>
  );
};

export default App;

const FilterModal = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 40;
  transition: ease-in-out 5s all;
  min-height: 100vh;
`;
