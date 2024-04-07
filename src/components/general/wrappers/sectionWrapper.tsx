import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <section className="max-w-[1440px] mx-auto">{children}</section>;
};

export default SectionWrapper;
