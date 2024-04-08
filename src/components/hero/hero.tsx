import { useDispatch } from "react-redux";
import { Balances, Graph } from ".";
import { SectionWrapper } from "../general/wrappers";
import { AppDispatch } from "../../store";
import {
  closeFilter,
  closeTransactionType,
} from "../../management/features/filtersSlice";

const Hero = () => {
  const dispatch = useDispatch<AppDispatch>();

  // CLOSE THE FILTER SIDE BAR AND THE TRANSACTION TYPE DROP DOWN
  const handleHeroClick = () => {
    dispatch(closeFilter());
    dispatch(closeTransactionType());
  };

  return (
    <SectionWrapper
      className="pt-32 justify-between iPadAir:flex"
      handleClick={handleHeroClick}
    >
      <Graph />
      <Balances />
    </SectionWrapper>
  );
};

export default Hero;
