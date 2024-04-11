import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RevenuePage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="revenue" element={<RevenuePage />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </BrowserRouter>
  );
};

export default App;
