import {
  
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";
import News from "./pages/News";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState, useEffect } from "react";

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
          <Route
            path="/news"
            element={
              <ProtectedRoute isLogged={isLogged}>
                <News />
              </ProtectedRoute>
            }
          />
        </Routes>
 
    </div>
  );
}

export default App;
