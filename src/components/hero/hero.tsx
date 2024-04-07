import { Balances, Graph } from ".";

const Hero = () => {
  return (
    <section className="pt-32 flex justify-between max-w-[1440px] mx-auto">
      <Graph />
      <Balances />
    </section>
  );
};

export default Hero;
