export const navStyles = (navIsOpen: boolean) => {
  const navBarStyle = `flex flex-col ${
    navIsOpen ? "h-[320px]" : "h-[55px]"
  } bg-[#fff] z-10 shadow-md px-4 py-3 w-[98%] fixed translate-x-[50%] right-1/2 iPad:flex-row iPad:rounded-full ${
    navIsOpen ? "" : "rounded-full"
  } iPad:justify-between iPad:items-center iPad:h-fit`;

  const middleNavStyles = `flex items-center gap-[5px] transition-all py-2 rounded-3xl px-4 
  `;

  return { navBarStyle, middleNavStyles };
};

export const revenueNavStyle = () => {
  const revenueBg = `bg-[#3b4147] text-[#f1f1f1] rounded-3xl`;
  return revenueBg;
};
