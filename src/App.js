import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
//import PlantCard from "./components/PlantCard";
import LandingPage from "./pages/LandingPage";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";
import News from "./pages/News";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/register" element={ <RegisterForm/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
