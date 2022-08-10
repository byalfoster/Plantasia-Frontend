import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/Navbar";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";
import { Contact } from "./pages/Contact";




function App() {
  return (
    <div className="App">
        <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<Contact />} />
        </Routes>
      </Router>

   
    </div>
  );
}

export default App;