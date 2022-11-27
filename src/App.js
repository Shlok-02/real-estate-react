import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
