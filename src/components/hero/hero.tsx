import { Balances, Graph } from ".";
import { SectionWrapper } from "../general/wrappers";

const Hero = () => {
  return (
    <SectionWrapper className="pt-32 justify-between iPadAir:flex">
      <Graph />
      <Balances />
    </SectionWrapper>
  );
};

export default Hero;
