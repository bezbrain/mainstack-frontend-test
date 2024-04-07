import { SingleBalance } from "..";

const Balances = () => {
  return (
    <div className="w-[30%]">
      {Array(4)
        .fill(undefined)
        .map((_, index) => (
          <SingleBalance key={index} />
        ))}
    </div>
  );
};

export default Balances;
