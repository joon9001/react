import React, {Component} from "react";

/*
class MyName extends Component{
    // static defaultProps = { //props에 기본값 부여
    //     name: '기본 이름'
    // }

    render(){
        return(
            <div>
                안녕~ 내 이름은 <b>{this.props.name}</b>
            </div>

        );
    }
}
MyName.defaultProps = { //props에 기본값 부여, 위의 defaultProps랑 같은 의미
    name:'기본 이름'
}
*/
/*
// 위의 클래스를 함수로 소스 코드 변환1
function MyName(props){ //props를 kbs로 바꿔줘도 됨 (단, 아래 props도 바꿔줘야함)
return(
    <div>
        안녕하세요 <b>{props.name}</b>
    </div>
)
}
*/
// 위의 클래스를 함수로 소스 코드 변환2
const MyName = ({name}) => {
    return(
        <div>
            안녕하세요 <b>{name}</b>라고 해
        </div>
    )
}
export default MyName;