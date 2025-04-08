import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { Register } from "./Components/Register";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Destination } from "./Pages/Destination";
import { Home } from "./Pages/Home";
import { Packages } from "./Pages/Packages";
import { Service } from "./Pages/Service";
import { Navbar } from "./Components/Navbar";
import { useEffect } from "react";
import { Login } from "./Components/Login";
import { ScrooltoTop } from "./Components/ScrooltoTop";

export const App = () => {
  const location = useLocation();
  const showNavbar =
    location.pathname !== "/login" && location.pathname !== "/register";
  const navigation = useNavigate();
  useEffect(() => {
    navigation;
  }, []);
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cya-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <ScrooltoTop />
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
