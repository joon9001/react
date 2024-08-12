import React, {Component} from "react";
import store from "../store";

export default class ShowNumber extends Component {
    state = {number:store.getState().number}

    constructor(props) {
        super(props);
//store에 저장된 값을 view에서 읽어오기 위해서는 
//subscribe(구독)를 써서 참조관계를 만들어준다.
        store.subscribe(function(){
            this.setState({number:store.getState().number})
        }.bind(this));
    }
    render() {
        return(
            <div>
                <h1>Show Number</h1>
                {/* 
                <input type="text" value={this.props.number} readOnly></input>
                */}
                <input type="text" value={this.state.number} readOnly></input>
            </div>
        );
    }
}