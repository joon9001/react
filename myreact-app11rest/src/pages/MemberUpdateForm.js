import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Member from "./Member";

export default function MemberUpdateForm(){
    // "/members/:num/edit" num 값 읽기
    //url 경로에서 num 값만 읽어오는것임
    const {num} = useParams();
    // 수정할 정보 state로 관리
    const [state, setState] = useState({
        num: 0,
        name:"",
        addr:""
    });
//useEffect는 아래 handleChange, handleSave 이벤트가 모두 발생 후 마지막에 수행된다.
     useEffect (() => {
        // Ajax 요청 (get 방식) 설정: 수정 자료 읽기
        axios.get("/members/" + num)
        .then(res => {
            // 서버로부터 응답된 데이터를 이용해서 state를 수정
            // res.data는 {num:1, name:'공기밥', addr:'강남구'}
            setState(res.data) //jsonData가 넘어옴
        })
        .catch(error =>{
            console.log(error);
        })
    }, [num])

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
     // json 타입으로 데이터가 들어갈 수 있도록 키:값 형태로 넣어줌
        })
    }

    const navigate = useNavigate();

    // 수정 버튼 클릭에 대한 이벤트 핸들러
    const handleSave = () => {
            // Ajax 요청 (PUT 방식) 설정 : update
            axios.put("/members/" + num, state) //sprweb21_rest의 MemberController로 보냄
            .then(res => {
                    navigate("/members") // 수정 후 목록보기 
            })
            .catch(error =>{
                console.log(error);
            })
        }

    return(
        <>
        <h2>회원 정보 수정</h2>
        <div>
            <label>이름 : </label>
            <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
            <label>주소 : </label>
            <input type="text" name="addr" onChange={handleChange} />
        </div>
        <button onClick={handleSave}>수정 확인</button>
        </>
    )
}