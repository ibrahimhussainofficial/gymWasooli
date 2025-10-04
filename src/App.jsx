import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import Footer from "./components/Footer";
import WhoWeAre from "./pages/WhoWeAre";
import RequestDemo from "./pages/RequestDemo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
