import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
}

const SectionWrapper = ({
  children,
  className,
  handleClick,
}: SectionWrapperProps) => {
  return (
    <section
      className={`max-w-[1440px] mx-auto ${className}`}
      onClick={handleClick}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
