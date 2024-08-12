import React, {Component} from "react";

class Subject extends Component{
    render(){
        const clickHandler = () => {
            console.log('두번째 버튼 클릭 성공');
        }

        const keyUpHandler = (e) => { //텍스트 박스의 keyUp이벤트 핸들러
            console.log('텍스트 키업 이벤트 성공');
            console.log('입력한 값 :  ', e.target.value);
        }
        return(
            <header>
                <h1>머리글 : {this.props.title}</h1>
                {this.props.subtitle}
                <br/>
                button 이벤트 :
                <br/>
                <button onClick={function(){
                    this.props.changePage();
                }.bind(this)}>{this.props.subtitle}</button>
   
                <br/><br/>
                <button onClick={clickHandler}>두번째 버튼</button>

                <br/><br/>
                <input type="text" onKeyUp={keyUpHandler}/>
            </header>
        );
    }
}
 // 위의 bind(this)는 React 클래스형 컴포넌트에서는 이벤트 핸들러 메서드 내에서 
 // this가 기본적으로 컴포넌트 인스턴스를 가리키지 않을 수 있으므로 
// this를 명시적으로 바인딩해준 것이다. 단, 화살표 함수는 선언된 위치의 this를 
// 상속받으므로, 별도의 바인딩이 필요 없다.
export default Subject;