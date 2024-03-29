import Header from "./Header/Header";
import Home from "./Home/Home";
import "./App.css";
import Footer from "./Footer/Footer";
import CollegeList from "./College List/CollegeList";
import Info from "./Info/Info";
import AboutUs from "./About Us/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main-div">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/collegelist" element={<CollegeList />}></Route>
          <Route path="/info" element={<Info />}></Route>
          {/* <Route path="/aboutus" element={<AboutUs />}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
