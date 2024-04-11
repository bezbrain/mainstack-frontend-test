import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, RevenuePage, SharedLayout } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="revenue" element={<RevenuePage />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </BrowserRouter>
  );
};

export default App;
