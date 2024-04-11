import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from "../../components/navBar";
import { store } from "../../store";
import { Provider } from "react-redux";

describe("Profile Dropdown", () => {
  test("Dropdown Profile when open button is clicked", () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    const btnOpen = screen.getByTestId("open-dropdown");
    fireEvent.click(btnOpen);

    // Check if the ProfileDropdown component is rendered when the button is clicked
    const profileDropdown = screen.getByTestId("profile-dropdown");
    expect(profileDropdown).toBeInTheDocument();

    // // Check if the toggleDropdown state is true after the button click
    // const isDropdownOpen = screen
    //   .getByTestId("nav-bar")
    //   .getAttribute("data-dropdown-open");
    // expect(isDropdownOpen).toBe("true");

    // expect(btnOpen.getAttribute("dropdown")).toBe(true);
  });
});
