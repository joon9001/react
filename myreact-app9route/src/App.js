import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyTest from "./exam/Test"
import HiAbout from "./exam/About"
import Counter from "./exam/Counter"
import Input1 from "./exam/Input1"
import Input2 from "./exam/Input2"
import Multidata from "./exam/Multidata"
import MyAjax from "./exam/MyAjax"

function App() {
  return (
    <Router>
    <div className="App">
      <h2>라우트 연습용 메인 화면</h2>
      <MyTest/>

      <hr/>
    {/* 메뉴 작성 : 라우팅 연습 */}
    <nav>
    {/* Link는 a tag로 전환 가능 : 요청명 개념으로 이해,
        a tag와의 차이는 SPA 구현 가능 여부이다.*/}
    <Link to="/">Test화면</Link> |
    <Link to="/about">About 보기</Link> |
    <Link to="/count">친구 추가/삭제</Link> |
    <Link to="/input1">자료입력1</Link> |
    <Link to="/input2">자료입력2</Link> |
    <Link to="/multi">배열자료</Link> |
    <Link to="/ajax">Ajax 요청(과일)</Link> |
    </nav>

    <Routes>
      {/* 컴포넌트에서 동적 라우팅을 구현 가능
      위의 Test화면을 누르면 Link to="/"에 의해 Route path="/"로 연결이 되고 최종적으로 
element={<MyTest/>}로 연결되어 이동한다.*/}
      <Route path="/" element={<MyTest/>}></Route> 
      <Route path="/about" element={<HiAbout/>}></Route> 
      <Route path="/count" element={<Counter/>}></Route> 
      <Route path="/input1" element={<Input1/>}></Route> 
      <Route path="/input2" element={<Input2/>}></Route> 
      <Route path="/multi" element={<Multidata/>}></Route> 
      <Route path="/ajax" element={<MyAjax/>}></Route> 
    </Routes>
    </div>
    </Router>
  );
}

export default App;
