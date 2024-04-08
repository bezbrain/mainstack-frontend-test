import { useDispatch } from "react-redux";
import { Balances, Graph } from ".";
import { SectionWrapper } from "../general/wrappers";
import { AppDispatch } from "../../store";
import { closeFilter } from "../../management/features/filtersSlice";

const Hero = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <SectionWrapper
      className="pt-32 justify-between iPadAir:flex"
      handleClick={() => dispatch(closeFilter())}
    >
      <Graph />
      <Balances />
    </SectionWrapper>
  );
};

export default Hero;
