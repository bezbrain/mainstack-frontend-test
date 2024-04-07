import { Hero } from "./components/hero";
import { NavBar } from "./components/navBar";

const App = () => {
  return (
    <main className="relative mx-4">
      <NavBar />
      <Hero />
    </main>
  );
};

export default App;
