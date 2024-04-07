import { Balances, Graph } from ".";
import { SectionWrapper } from "../general/wrappers";

const Hero = () => {
  return (
    <SectionWrapper>
      <div className="pt-32 flex justify-between">
        <Graph />
        <Balances />
      </div>
    </SectionWrapper>
  );
};

export default Hero;
