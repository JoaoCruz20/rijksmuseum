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
        <Route caseSensitive={false} path="/"  element={<Home />}>
          <Home />
        </Route>
        <Route caseSensitive={false} path="/profile" element={<Profile />}>
          <Profile />
        </Route>
        <Route caseSensitive={false} path="/search" element={<SearchPage />}>
          <SearchPage />
        </Route>
        <Route caseSensitive={false} path="/about" element={<About />} >
          <About />
        </Route>
      </Routes>     
    </Router>
  );
}

export default App;
