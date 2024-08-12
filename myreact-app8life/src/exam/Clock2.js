import React,{Component} from "react";

class Clock2 extends Component{
    //클래스형 컴포넌트는 props로 기본 constructor를 호출해야 함
    constructor(props){
        super(props)

        this.state = {date:new Date()} // state를 생성자에서 지정
    }

// 마운트(Mount)는 DOM 객체가 생성되고 브라우저에 나타나는 것을 의미합니다. 이때 호출되는 함수는 다음과 같습니다.
// -마운트 (Mount) 메소드 호출 순서
// 1) constructor : 컴포넌트 클래스의 생성자 함수로 컴포넌트를 만들 때 처음으로 호출되는 함수입니다. 앞 포스팅에서 배웠던 것처럼 state의 초기값을 지정할 때 사용합니다. 
// 2) getDerivedStateFromProps : props와 state 값을 동기화할 때 사용하는 함수로 리액트 v16.3 이후에 만들어진 함수입니다.
// 3) render : 컴포넌트의 기능과 모양새를 정의하는 함수로 리액트 요소를 반환합니다. 
// 4) componentDidMount : 컴포넌트를 생성하고 첫 렌더링이 끝났을 때 호출되는 함수입니다. 
showSigan(){
    this.setState({
        date:new Date()
    })
}    
// 컴포넌트 출력 자료가 DOM에 렌더링 된 후에 실행되기 때문에 타이머와 같은
// 작업을 하기에 적당한 메소드
// componentDidMount()는 useEffect를 포함하고 있는 클래스형에서만 사용 가능하므로 함수형에서는 사용불가하다
//함수형에서 쓰려면 Clock3.js파일처럼 따로 만들어 useEffect를 import해줘야 함
componentDidMount(){ //리액트 시스템에 의해 호출되는 콜백함수()
        //setInterval() : 어떤 코드를 일정 시간 간격을 두고 반복 호출 가능한 함수
        this.timerID = setInterval(
            () => this.showSigan(),
            1000
        //1초마다 showSigan()함수를 불러 시간을 업데이트한다. 
        );
    }
componentWillUnmount(){ // 시스템에 의한 콜백
    // 사용된 메모리 등의 작업 마무리
    // SPA를 개발할 때는 메모리 누수 (leak)를 방지하는 작업이 필요
    clearInterval(this.timerID); // setInterval() 해제
}
    render(){
        return(
            <div>
                <h1>Hello~</h1>
                <h2>지금은 {new Date().toLocaleTimeString()}</h2>
                <h2>현재 시간은 {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock2;