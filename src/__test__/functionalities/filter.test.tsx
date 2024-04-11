import { render, fireEvent, screen } from "@testing-library/react";
import { Filter } from "../../components/transactions/filters";
import { store } from "../../store";
import { Provider } from "react-redux";
import { TransHeader } from "../../components/transactions";

describe("Filter Component", () => {
  test("Open filter when open button is clicked", () => {
    render(
      <Provider store={store}>
        <TransHeader />
      </Provider>
    );

    // Dispatch action to open filter
    fireEvent.click(screen.getByTestId("open-button"));

    // Check if filter is open
    expect(store.getState().filterStore.isFilter).toBe(true);
  });

  test("Close filter when close button is clicked", () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    // Dispatch action to close filter
    fireEvent.click(screen.getByTestId("close-button"));

    // Check if filter is closed
    expect(store.getState().filterStore.isFilter).toBe(false);
  });
});

describe("Filter Reducer", () => {
  test("Close filter action sets isFilter to false", () => {
    // const newState = filterReducer()
  });
});
