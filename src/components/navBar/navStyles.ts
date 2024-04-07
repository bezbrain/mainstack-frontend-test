export const navStyles = (navIsOpen: boolean) => {
  const navBarStyle = `flex flex-col ${
    navIsOpen ? "h-[320px]" : "h-[55px]"
  } bg-[#fff] z-10 mt-4 shadow-md px-4 py-2 w-[98%] fixed translate-x-[50%] right-1/2 iPad:flex-row iPad:rounded-full ${
    navIsOpen ? "" : "rounded-full"
  } iPad:justify-between iPad:items-center iPad:h-fit`;

  const middleNavStyles = `flex items-center gap-[5px] transition-all py-2 rounded-3xl iPad:px-4 iPad:hover:bg-[#edf0f5]`;

  return { navBarStyle, middleNavStyles };
};
