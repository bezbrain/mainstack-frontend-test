import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  closeFilter,
  closeTransactionStatus,
  closeTransactionType,
} from "../management/features/filtersSlice";
import { closeModal } from "../management/features/transactionSlice";
import styled from "styled-components";
import { SideIcons } from "../components/sideIcons";
import { NavBar } from "../components/navBar";
import { Hero } from "../components/hero";
import { Transactions } from "../components/transactions";

const RevenuePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const closeModalClick = () => {
    dispatch(closeFilter());
    dispatch(closeTransactionType());
    dispatch(closeTransactionStatus());
    dispatch(closeModal());
  };

  const { isModal } = useSelector((store: RootState) => store.transactionStore);

  return (
    <main className="mx-4">
      {isModal && <FilterModal onClick={closeModalClick} />}
      <SideIcons />
      <NavBar />
      <Hero />
      <Transactions />
    </main>
  );
};

export default RevenuePage;

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
