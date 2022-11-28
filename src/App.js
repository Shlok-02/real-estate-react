import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Property from './components/Property/Property';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='property' exact element={<Property/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
