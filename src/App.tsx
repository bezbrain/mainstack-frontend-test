import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Hero } from "./components/hero";
import { NavBar } from "./components/navBar";
import { Transactions } from "./components/transactions";

const App = () => {
  return (
    <main className="mx-4">
      <NavBar />
      <Hero />
      <Transactions />
      <ToastContainer position="bottom-right" autoClose={5000} />
    </main>
  );
};

export default App;
