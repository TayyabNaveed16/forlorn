import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Opening from './screens/Opening';
function App() {
  return (
    <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opening" element={<Opening />} />


          </Routes>
    </Router>
  );
}

export default App;
