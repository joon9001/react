import React, {StrictMode, useEffect, useState} from 'react';
import '../App.css'
import pic1 from '../pic.png'; //이미지 읽기

// function HookTest2(){
// ...
//}

// export default HookTest2
// 위의 코드를 아래와 같은 형식으로 적을 수도 있다.
export default function HookTest2(){
    const[item, setItem] = useState(0); // 동적 변수
    //const[상태값, 상태변환함수] = useState(초기값);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    useEffect(() => {
        let a = 1;
        console.log(a);  // 변수 a 사용
    }, []);

    
    let st = {color: 'blue', textAlign: 'center'};

/* JSX 문법 적용 영역 */
    return (
        <div className='App' >
            <div>
                number: {item} &nbsp
                <button onClick={incrementItem}>증가</button>&nbsp;
                <button onClick={decrementItem}>감소</button>
            </div>

            {/* css style 적용 : style 속성값은 {key:'value'} 안에 적음 */}
            <h1 className='blackbar'>리액트의 이해</h1>
            <h2 style={{color:'red'}}>ECMA에 대한 선행 학습 필요</h2>
            <h3 style={st}>css 적용 방식에 대한 이해</h3>

            {/* 이미지 적용 1 : src 폴더 내 파일 */}
            <div>
                <img src={pic1} alt="첫번째 이미지" />
            </div>
            {/* 이미지 적용 2 : css 파일의 background-image */}
            <div className='img_bg'></div>
            {/* 이미지 적용 3 : public 폴더에 있는 파일 */}
            <img src={`${process.env.PUBLIC_URL}/imgs/pic3.png`} alt='public 폴더 이미지 읽기 '/>
        </div>


    );
}