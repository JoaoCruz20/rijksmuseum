import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/pages/home";

function App() {
  return (
    <Router> 
      <Routes>
        <Route caseSensitive={false} path="/" element={<Home />} />
      </Routes>          
    </Router>
  );
}

export default App;
