import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className: string;
}

const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
  return (
    <section className={`max-w-[1440px] mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
