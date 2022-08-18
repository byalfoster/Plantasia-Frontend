import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage";
import RegisterForm from "./pages/RegisterForm";
import News from "./pages/News";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState, useEffect } from "react";
import Home from "./pages/Home";


function App() {
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("token")
  );

  const location = useLocation();

  useEffect(() => {
    setIsLogged(window.localStorage.getItem("token"));
  }, [location]);

  return (
    <div className="App">
      
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<ProtectedRoute isLogged={isLogged}><Profile/></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute isLogged={isLogged}><Home/></ProtectedRoute>} />
        </Routes>
 
    </div>
  );
}

export default App;
