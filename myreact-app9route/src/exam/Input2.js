import React, { useState } from "react";

const Input2 = () => {
    const [params, setParams] = useState({
        irum:'',
        nai:'',
        juso:''
    });

    const {irum, juso, nai} = params;

    const changeFunc = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        
        setParams({
            ...params,
            [id]:value   
// [id]가 irum,nai,juso 중에 하나면 기존 속성값 대체, 
// 이외의 속성이면 새로운 속성값으로 배열에 추가
        })
    }

   

    return(
        <div>
            <br/>
            <div>
                <label for="irum">이름 : </label>
                <input type="text" value={irum} id="irum" onChange={changeFunc} />
            </div>
            <div>
                <label for="nai">나이 : </label>
                <input type="text" value={nai} id="nai" onChange={changeFunc} />
            </div>
            <div>
                <label for="juso">주소 : </label>
                <input type="text" value={juso} id="juso" onChange={changeFunc} />
            </div>
            <br/>
            <h3>처리 결과</h3>
            <table>
               <tr> 
                <td>이름은 {irum} </td>
                <td>나이는 {nai} </td>
                <td>주소는 {juso}</td>
                </tr>
            </table>

        </div>
    )
};

export default Input2;