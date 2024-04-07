import { Hero } from "./components/hero";
import { NavBar } from "./components/navBar";
import { Transactions } from "./components/transactions";

const App = () => {
  return (
    <main className="mx-4">
      <NavBar />
      <Hero />
      <Transactions />
    </main>
  );
};

export default App;
