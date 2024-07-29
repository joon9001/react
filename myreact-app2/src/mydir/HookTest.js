import React, {useState} from 'react';

//Hook : class 없이 function으로 상태값(state)과 
//생명주기 기능을 사용 가능.
// 함수형 컴포넌트로 상태값 접근과 자식 요소에 접근이 가능

//function HookTest(){

//}
//위의 함수 생성을 아래와 같이 작성해도 됨
const HookTest = () => {
    // 형식 : const [state, setState] = useState(initialState)
    //        const [데이터, 데이터변경함수] = useState(초기값)
    // 클래스엔 없고 function에만 존재하는 형식  
    // jsx에서 자바스크립트를 쓸 때는 꼭 {}를 넣어줘야함 (아래 button onClick={})
    const [count, setCount] = useState(0);
    return(
        <div>
            number : {count} &nbsp;
            
            <button onClick={() => setCount(count +1)}>증가2</button>
        </div>
        
    );
};

export default HookTest;