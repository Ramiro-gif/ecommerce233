import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './screens/Home.jsx';


function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-gradient-to-t from-[#FFB8B8] to-[#1E1E1E]">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
