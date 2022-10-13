import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Details } from "./page/Details";
import { Home } from "./page/Home";
import "./css/style.css";
import "./page/home.css"
import FeaturedNews from "./components/featuredNews/FeaturedNews";

function App() {
  return (
    <>
        <BrowserRouter>
          <div className="wrapper-app">
              <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/details/:category/:name"  element={<Details/>}></Route>
                    <Route path="*" element={<h2>Not found</h2>}></Route>
                </Routes>
              </div>
              <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
