import './App.css';
import Navbar from './components/Navbar';
import HomePage from './website-pages/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App;
