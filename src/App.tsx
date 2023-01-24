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
import { Switch } from 'react-router';

function App() {
  return (
    <Router> 
      <Switch>
      <Routes>
        <Route caseSensitive={false} path="/"  element={<Home />}>
          <Home />
        </Route>
        <Route caseSensitive={false} path="/profile" element={<Profile />} />
        <Route caseSensitive={false} path="/search" element={<SearchPage />} />
        <Route caseSensitive={false} path="/about" element={<About />} />
      </Routes>  
      </Switch>        
    </Router>
  );
}

export default App;
