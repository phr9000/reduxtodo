import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "text1", checked: true },
    { id: 2, text: "text2", checked: false },
    { id: 3, text: "text3", checked: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  const appContainer = {
    textAlign: "center" as const,
    margin: "0 auto",
    width: "150px",
    padding: "20px",
  };

  const writeDownContainer = {
    display: "flex",
  };

  const listContainer = {
    display: "flex",
    flexDirection: "column" as const,
    listStyle: "none",
    padding: "0px",
  };

  // checkbox handle
  const handleCheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  // 삭제 handle
  const handleDelete = () => {
    setTodos(todos.filter(todo => !todo.checked));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 전송 handle
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: inputValue, checked: false }]);
    setInputValue('');
  };

  return (
    <div className="App">
      <div style={appContainer}>
        <form style={writeDownContainer} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="todo 사항을 입력해주세요"
            onChange={handleChange}
            value={inputValue}
          />
          <button
            type="submit"
            style={{ display: "block", minWidth: "fit-content" }}
          >
            전송
          </button>
        </form>
        <ul style={listContainer}>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.checked} onChange={()=> handleCheck(todo.id)} />
              {todo.text}
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleDelete}>
          선택된 항목 삭제
        </button>
      </div>
    </div>
  );
}

export default App;
