import React, {useState} from "react";
import Child from "./mydir/Child";

function App() {
  // App 컴포넌트(함수)가 호출될 때 함수 내의 내용을 차례대로 수행(렌더링)
  // 리액트는 부모 컴포넌트가 렌더링될 때 자식 컴포넌트 또한 렌더링 된다.
  // 성능 최적화를 목적으로 컴포넌트에서 필요한 상황에서만 자식 컴포넌트가
  // 리렌더링에 참여할 수 있도록 React.memo 함수를 제공한다.

  const [fatherAge, setFatherAge] = useState(34);
  const [childAge, setChildAge] = useState(3);

  const changeFatherAge = () => {  // 아빠 나이 변경 이벤트 핸들러
    setFatherAge(fatherAge + 1);
  }

  const changeChildAge = () => {  // 자식 나이 변경 이벤트 핸들러
    setChildAge(childAge + 1);
  }
  console.log('아빠 나이가 변경됨 - 렌더링')

  const boxstyle = {border:'2px solid', padding:'10px'}
  return (
    <div style={boxstyle}>
      <h2>😁아빠 (신기루님)</h2>
      <span>나이 : {fatherAge}</span>&nbsp;&nbsp;
      <button onClick={changeFatherAge}>아빠 나이 변경</button>
      
      <hr />
      <Child irum={'신통해'} nai={childAge} />
      <button onClick={changeChildAge}>자녀 나이 변경</button>
    </div>
  );
  // 위의 button을 클릭하면 changeFatherAge 함수가 실행되면서 fatherAge를 증가시키고
  // 상태가 변경되었으므로 React는 App 컴포넌트를 다시 렌더링하여 본문에 있는 
  // console.log('아빠 나이가 변경됨 - 렌더링')가 실행되어 출력됨
  // memo 기능을 쓰지 않았다면 App이 리렌더링 될때 원래 자식 컴포넌트인 Child.js도 리렌더링
  // 되므로 child.js에 있는 console.log('와우! 자녀 나이 바뀜(렌더링)')도 같이 출력된다.
}

export default App;
