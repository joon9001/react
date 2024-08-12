import React, {memo} from "react";

const boxstyle = {border:'1px solid blue', padding:'20px'}

//function Child({irum, nai}){...}
const Child = ({irum, nai}) => {
    console.log('와우! 자녀 나이 바뀜(렌더링)')

    return(
        <div style={boxstyle}>
            <h3>😘자녀1</h3>
            <p>이름 : 신통한</p>
            <p>나이 : 5살</p>
            <h3>😘자녀2</h3>
            <p>이름 : {irum}</p>
            <p>나이 : {nai}</p>
        </div>
    );
}

//export default Child;
export default memo(Child); 
//메모라이징: 반환 컴포넌트를 memo함수로 감싸주면 memo기능이 활성화된다. 
//props가 변경되지 않는 한, 
//이전에 렌더링된 결과를 재사용함으로써 불필요한 리렌더링을 방지한다. 