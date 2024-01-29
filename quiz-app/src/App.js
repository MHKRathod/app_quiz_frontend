import {Routes,Route} from "react-router-dom";
import './App.css';
import {Home,Login} from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
