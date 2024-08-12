import React, {Component} from "react";
import store from '../store';

export default class AddNumber extends Component{
    state = {size:1}
    render(){
        return(
            <div>
                <h1>Add Number</h1>
            {/* +버튼 클릭 시 size값이 상위 컴포넌트로 전달될 수 있게
            onClick(부모 컴포넌트의 onClick)을 구현, props로 전달받은 
            onClick 함수를 호출하는데 현재 컴포넌트의 state인 size값을 전달함.
            onClick 함수는 AddNumberSuper에서 작성해준다.
            */}

            {/* 
                <input type="button" value="+" 
                    onClick={function(){
                        this.props.onClick(this.state.size)
                    }.bind(this)}></input>
            */}

            {/* Redux 사용  */}
            <input type="button" value="+" 
                    onClick={function(){
                     store.dispatch({type:'INCREMENT', size:this.state.size});
            //store.js파일의 creatStore에서 보내준 state값을 이용해 데이터를 store에 저장
                    }.bind(this)}></input>
                    
                <input type="text" value={this.state.size} 
                    onChange={function(e){
                        this.setState({size:Number(e.target.value)});
                    }.bind(this)}></input>
            </div>
        );
    }
}

