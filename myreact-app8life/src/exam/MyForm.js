import { useState } from "react";

function MyForm(){
    const [formData, setFormData] = useState({
        irum: '',
        nai:'',
        menu: '파전'
    })
    
    const dataChange = (e) => {
        const name = e.target.name; 
    //위는 form 태그 내에서 값의 변화가 일어난 name 속성값이 들어간다.
        const value = e.target.value;
    //위는 값의 변화가 일어난 name 속성값에 맞는 input필드 value 값이거나 
    //select에서 선택한 option value값이 들어간다.
        setFormData({
            ...formData,
            [name]:value
        });
    }
    //기존의 formData를 순서대로 꺼내어 나열 후 값의 변화가 일어난 name 속성값과 
    // 이에 해당하는 value값을 마지막 배열로 추가한다.
    const dataSubmit = (e) => {
        e.preventDefault();
        const {nai} = formData; 
//위는 객체구조 분해할당, const nai = formData.nai;와 같다.
// formData 객체에서 nai를 추출해 nai 변수에 치환
        if(!Number(nai) || isNaN(Number(nai))){ // 나이 입력 자료 검사
            alert('나이는 숫자로 입력하시오');
        }else{
            alert('처리 성공');
        }
    } 
//return에서 출력하려면 최상위에 <div></div> 또는 <></>태그가 있어야한다.
    return(
        <> 
        <h3>결과 : {formData.irum}, 넌 {formData.nai}살! 선택한 음식은 {formData.menu}</h3>
        <form onSubmit={dataSubmit}>
          이름 입력: <input type="text" name="irum" onChange={dataChange}/><br/>
          나이 입력: <input type="text" name="nai" onChange={dataChange}/><br/>
          야식 메뉴: 
          <select name="menu" value={formData.menu} onChange={dataChange}>
            <option value="치킨">치킨</option>
            <option value="파전">파전</option>
            <option value="삼겹살">삼겹살</option>
          </select>
          <br/><br/>
          <button type="submit">전송</button>
        </form>
        </>
    );
}

export default MyForm