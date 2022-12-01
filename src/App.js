import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Property from './components/Property/Property';
import { Individual } from './components/Individual/Individual';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='property'  element={<Property/>}></Route>
        <Route path='property-info' exact element={<Individual/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
