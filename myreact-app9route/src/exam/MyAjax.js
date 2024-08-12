import React, {useState, useEffect} from "react";

const MyAjax = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // fetch를 이용해 jsp 자료(Apache server) 읽기
    // Ajax 처리 성공하면 isLoaded, items를 갱신
    useEffect(() => {
        fetch("/web_react/abc.jsp", {method:'GET'})
        .then(res => { //res = promise의 객체 중 하나인 resolver
            if(!res.ok){
                throw new Error('network response was not ok');
            }
            return res.json();
            //통신에 성공하면 json 형태로 결과값 반환
        })
        .then(
            //위에서 통신에 성공하여 반환한 값을 result로 받음
            (result) => {
                setIsLoaded(true);
                setItems(result.items); //위의 items가 아니고 이클립스 react 파일의 items임
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    // error가 나면 에러 메세지를, isLoaded가 false이면 로딩 메세지를
    // 그 외에는 items를 출력(렌더링)한다.
    if(error){
        return <div>에러 : {error.message}</div>
    }else if(!isLoaded){
        return <div>자료 수신 중 ... </div>
    }else {
        return(
            <ul>
                {items.map(item => (
                    <li>
                        {item.code} {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }    
}

export default MyAjax;