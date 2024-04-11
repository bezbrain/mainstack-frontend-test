import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { NavBar } from "../../components/navBar";
import { store } from "../../store";
import { Provider } from "react-redux";

describe("Profile Dropdown", () => {
  test("Dropdown Profile when open button is clicked", async () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    // Wait for the button to appear
    const btnOpen = await screen.findByTestId(
      "toggle-dropdown",
      {},
      { timeout: 5000 }
    );
    // Click the button
    fireEvent.click(btnOpen);

    // Wait for the state to update
    await waitFor(() => {
      expect(store.getState().navStore.toggleDropdown).toBe(true);
    });
  });

  test("Close Dropdown Profile when close button is clicked", async () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    // Wait for the button to appear
    const btnClose = await screen.findByTestId(
      "toggle-dropdown",
      {},
      { timeout: 5000 }
    );
    // Click the button
    fireEvent.click(btnClose);

    // Wait for the state to update
    await waitFor(() => {
      expect(store.getState().navStore.toggleDropdown).toBe(false);
    });
  });
});
