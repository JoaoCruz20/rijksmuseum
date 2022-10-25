import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/pages/home";
import Profile from "../src/pages/profile";

function App() {
  return (
    <Router> 
      <Routes>
        <Route caseSensitive={false} path="/" element={<Home />} />
        <Route caseSensitive={false} path="/profile" element={<Profile />} />
      </Routes>          
    </Router>
  );
}

export default App;
