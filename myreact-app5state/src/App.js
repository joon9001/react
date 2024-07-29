// /* eslint-disable*/  //  <---경고 무시

import './App.css';
import React, {useState} from 'react'; 
function App() {
  // 일반 데이터
  let irum = '지연의 JSX 사용법 : 일반 데이터'

  // state도 변수이다, const, let 변수와 다르게 값이 변하면 컴포넌트가 재렌더링되어 업데이트된 내용이 화면에 적용된다.
  // state 데이터 
  let [jemok, setJemokFunc] = useState('자바스크립트'); // 문자열 기억
  let [jemok2, setJemokFunc2] = useState(['리액트', '뷰']); // 배열 자료 기억

  // 이벤트 처리 함수 1
  function dataUpdate(){
   // let newArr = [...jemok]; // 전개 연산자에 의해 문자열이 낱개 문자로 분리돼 배열로 복사 
   // console.log(newArr );
    jemok = 'React 멋져~'
    setJemokFunc(jemok); //jemok state는 setJemokFunc 함수로 값 수정
    console.log(jemok);
  }
  

  function dataUpdate2(){
    let newArr = [...jemok2]; //배열의 일부 수정을 위해 전개 연산자로 복사
    console.log(newArr);
    newArr[1] = "뷰 화이팅" // newArr[1] 값 변경
    setJemokFunc2(newArr); // jemok2 값을 변경하기 위해 setJemokFunc2 함수 사용
  }

  // 이벤트 처리 2
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='blue_bar'>
      <h1>리액트 state 이해</h1>
      </div>
      <div className='list'>
        <h3>{jemok} </h3>
        <span>{irum}</span>
        <p>state 확인</p>
        <button onClick={dataUpdate}>jemok 값 변경</button>
        <hr/>
        </div>

        <div className='list'>
        <h3>jemok2[0] : {jemok2[0]} </h3>
        <h3>jemok2[1] : {jemok2[1]}</h3> <br/>
        <p>state 확인</p>
        <button onClick={dataUpdate2}>jemok2 값 변경</button>
        <hr/>
        </div>
        
        <div>
          이모티콘 클릭 : <span onClick={
            () => {setCount(count + 1 )}}>😊😂😂😍</span>{count}번 클릭!
          

        </div>
      </div>

  );
}

export default App;
