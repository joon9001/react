
import React,{useState} from "react"
//items 배열에 들어있는 각 항목을 map을 이용해 꺼내어서 key에 출력한다.
function TodoList({items}){
  return(
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
// key는 React에서 리스트 항목을 고유하게 식별함으로써 새 항목 추가 시 
// 불필요한 렌더링을 방지하고, 각 항목의 상태를 유지하는 데 필수적인 역할을 한다.
function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
//할일을 setText로 입력받아 배열 items에 시간정보와 함께 최종적으로 저장한다.
  const handleChange = (e) => {
    setText(e.target.value);
  }
// 아래는 폼이 제출될 때, 페이지가 새로고침 되거나 다른 페이지로 
// 이동되는 기본 동작을 preventDefault()를 호출하여 막는다.
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.length === 0){
      return;
    }

    const newItems = {
      text:text, 
      id:Date.now(),
    }
//아래는 이전 항목(prevItems)을 ...스프레드 연산자로 하나씩 쪼갠 후, 
//맨 마지막 순번에 newItems를 추가 후 다시 배열로 만든다.
    setItems((prevItems) => [...prevItems, newItems]);
    setText('');
  }

  return (
    <div className="App">
      <h3>오늘 할 일 적기</h3>
      <TodoList items={items} />

      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">오늘 뭐 할건데?</label>
        <input id="todo" onChange={handleChange} value={text} />
        &nbsp;
        <button>클릭 #{items.length}</button>
      </form>
    </div>
  );
}

export default App;
