import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { Filter } from "../components/transactions/filters";
import { NavBar } from "../components/navBar";
import { Graph } from "../components/hero";

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

  test("Filter container renders with initial state", () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const filterContainer = screen.getByTestId("filter");
    expect(filterContainer).toBeInTheDocument();
  });

  test("Chart components renders", () => {
    render(
      <Provider store={store}>
        <Graph />
      </Provider>
    );
    const graphContainer = screen.getByTestId("graph");
    expect(graphContainer).toBeInTheDocument();
  });
});
