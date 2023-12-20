import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Profiles from "./components/Profiles";
import HeroSection from "./components/HeroSection";
import Example from "./components/Example"


function App() {
  return (
      <div>
        <Header/>
        <HeroSection />
        <Profiles />
        <Example/>
        <Routes>
          <Route path={'/'} element ={<Start/>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;