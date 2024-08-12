import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Test from "./exam/MyTest";
import Gugu from "./exam/Gugu";
import Jikwoninfo from "./exam/Jikwoninfo";


function App() {
  return (
    <Router>
    <div className="App">
      <h2>메인페이지</h2>
      <hr/>
      <nav>
        <Link to="/">메인</Link> | 
        <Link to="/gugu">구구단</Link> | 
        <Link to="/info">직원정보</Link> 
    </nav>
    <Routes>
        <Route path="/" element={<Test/>}></Route>
        <Route path="/gugu" element={<Gugu/>}></Route>
        <Route path="/info" element={<Jikwoninfo/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
