import React, {Component} from "react";
import AddNumber from "./AddNumber";

export default class AddNumberSuper extends Component{
    render(){
        return(
            <div id="super">
                <h1>Add Number Super</h1>
{/* AddNumber의 props로 매개변수가 size인 함수를 전달한다 
    이 함수는 AddNumber의 + 버튼을 클릭했을 때 AddNumber의
    state.size 값을 호출한다. 
    이 size 값을 다시 상위 컴포넌트 App으로 전달해야하기 때문에
    상위 컴포넌트로부터 전달 받은 props의 onClick 함수를 호출해서
    size 값을 전달해야 한다.
    아래 this.props.onClick은 부모인 App.js의 onClick이다.
    */}
    {/* 
        <AddNumber onClick={function(size){
            this.props.onClick(size);
        }.bind(this)}></AddNumber>
    */}
            <AddNumber></AddNumber>
            </div>
        );
    }
}

