import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

export default function Member(){
    const [members, setMembers] = useState([]);

    const refresh = () => {
        // Ajax 요청 (get 방식) 설정
        axios.get("/members") //sprweb21_rest의 MemberController로 보냄
        .then(res => {
            // 서버로부터 응답된 데이터를 이용해서 state를 수정
            setMembers(res.data) //jsonData가 넘어옴
        })
        .catch(error =>{
            console.log(error);
        })
    }

    useEffect(() => {
        refresh();  // Ajax 요청 처리 시작
    }, [])

    //삭제 버튼 클릭 시 이벤트 핸들러 함수 
    const handleDelete = (num) => {
        // Ajax 요청 (DELETE 방식) 설정
        axios.delete("/members/" + num)
        .then(res => {
            // 삭제 후 목록보기
            refresh();        
        })
        .catch(error =>{
            console.log(error);
        })
    }

    //페이지 이동 함수
    const navigate = useNavigate(); //페이지 이동 함수 
    // Link : 단순하게 페이지 이동을 할 경우 사용 
    // useNavigate() : 특정 이벤트가 실행하면 동작하도록 하거나, 추가적인 로직이
    // 필요한 경우 사용
    return(
      <>
        <Link to="/">홈페이지</Link>&nbsp;&nbsp;
        <Link to="/members/new">회원추가</Link>
        <h1>회원 목록</h1>
        <table>
            <thead>
                <tr>
                    <th>번호</th><th>이름</th><th>주소</th><th>수정</th><th>삭제</th>
                </tr>
            </thead>
            <tbody>
            {members.map(item => <tr key={item.num}>
                <td>{item.num}</td>
                <td>{item.name}</td>
                <td>{item.addr}</td>
                <td>
                    <button onClick={()=>{
                        navigate (`/members/${item.num}/edit`)
                    }}>수정</button>
                </td>
                <td>
                <button onClick={()=>handleDelete(item.num)}>삭제</button> 
                </td>
            </tr>)
            }
            </tbody>
        </table>
      </>
    )
}