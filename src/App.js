
import "./App.css";



import Main from "./components/Main";
import DrawerAppBar from "./components/Navbar";
import LoginForm from "./components/LoginForm";




function App() {
  return (
    <div className="App">
      <DrawerAppBar/>
      <Main/>
      <LoginForm/>

   
    </div>
  );
}

export default App;