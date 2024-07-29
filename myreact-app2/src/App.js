import React, { useState } from 'react';
import HookTest from './mydir/HookTest';
import HookTest2 from './mydir/HookTest2';

const App = () => {
  const [count, setCount] = useState(0);
// setCount  생략 가능
  const countUpdate = (n) => { //이벤트 핸들러(처리) 함수
    setCount(n);
  };
//JSP 문법 적용
  return (
    <div>
      number : {count}&nbsp;
      <button onClick={() => countUpdate(count + 1)}>증가 1</button>
      <hr />
      <HookTest />
      <hr />
      <HookTest2 />
    </div>
  );
};

export default App;


/*
import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import { render } from '@testing-library/react';
import HookTest from './mydir/HookTest';
import HookTest2 from './mydir/HookTest2';

//class APP extends Component {... render(){ ... return(jsx)}}

// function App() {...return (jsx)}
class App extends Component {
  state = {
    count:0
  }
  countUpdate(n){
    this.setState({count:n});
  }
  render(){
    const {count} = this.state;
    return(
      <div>
        number : {count}&nbsp;
        <button onClick={() => {
          this.countUpdate(count + 1);
        }}> 증가 1</button>   
        <hr />
        <HookTest />    
        <hr />
        <HookTest2></HookTest2>  
      </div>
    )
  }

}
export default App;
//index.jsp에서 import 함
*/