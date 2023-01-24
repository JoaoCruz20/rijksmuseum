import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/pages/home";
import Profile from "../src/pages/profile";
import About from "../src/pages/about";
import SearchPage from "../src/pages/search";

function App() {
  return (
    <Router> 
      <Routes>
        <Route caseSensitive={false} path="/rijksmuseum"  element={<Home />} />
        <Route caseSensitive={false} path="/profile" element={<Profile />} />
        <Route caseSensitive={false} path="/search" element={<SearchPage />} />
        <Route caseSensitive={false} path="/about" element={<About />} />
      </Routes>     
    </Router>
  );
}

export default App;
