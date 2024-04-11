import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { Filter } from "../components/transactions/filters";
import { NavBar } from "../components/navBar";
import { Balances, Graph } from "../components/hero";
import { AllTransactions } from "../components/transactions";

describe("Filter Component", () => {
  test("Nav Bar renders", () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    const navBar = screen.getByTestId("nav-bar");
    expect(navBar).toBeInTheDocument();
  });

  test("Chart/Graph component renders", () => {
    render(
      <Provider store={store}>
        <Graph />
      </Provider>
    );
    const graphContainer = screen.getByTestId("graph");
    expect(graphContainer).toBeInTheDocument();
  });

  test("Wallet/Balance component renders", () => {
    render(
      <Provider store={store}>
        <Balances />
      </Provider>
    );
    const walletContainer = screen.getByTestId("balance");
    expect(walletContainer).toBeInTheDocument();
  });

  test("Transaction component renders", () => {
    render(
      <Provider store={store}>
        <AllTransactions />
      </Provider>
    );
    const transactionContainer = screen.getByTestId("transactions");
    expect(transactionContainer).toBeInTheDocument();
  });

  test("Filter container renders with initial state", () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const filterContainer = screen.getByTestId("filter");
    expect(filterContainer).toBeInTheDocument();
  });
});
