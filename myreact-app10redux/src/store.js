import { legacy_createStore as createStore} from "redux";
//store 생성하는 코드 
//리듀서함수: state와 action을 전달받아 애플리케이션 상태를 변환 후 반환하는 함수 
// A상태 -> B상태
//하는 일 1) action 타입 분석
//하는 일 2) 이전 상태를 다음 상태로 교체
//하는 일 3) 다음 상태 반환
//createStore(리듀서함수: function(state,action){}, )
export default createStore(function(state, action){
    //state : 데이터
    //action : 데이터에 가해진 행위 
    if(state === undefined){
        return {number:0} // number 초기화 
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size}
    } //위의 number:0의 값을 size를 더한 값으로 업데이트 
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
// createStore의 두번째 매개변수는 REDUX_DEVTOOLS를 사용하기 위한 지정값이다.
