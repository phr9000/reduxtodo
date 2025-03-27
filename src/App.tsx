import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import RemoveBtn from "./components/RemoveBtn";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "text1", checked: true },
    { id: 2, text: "text2", checked: false },
    { id: 3, text: "text3", checked: false },
  ]);



  const appContainer = {
    textAlign: "center" as const,
    margin: "0 auto",
    width: "150px",
    padding: "20px",
  };

  // checkbox handle
  // const handleCheck = (id: number) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo
  //     )
  //   );
  // };

  // 삭제 handle
  const handleDelete = () => {
    setTodos(todos.filter((todo) => !todo.checked));
  };

  const addTodo = (text: string) => {
    console.log("text >>>>>>>>>", text);

    setTodos((prev) => [
      ...prev,
      { id: new Date().getTime(), text, checked: false },
    ]);
  };

  const onChangeCheck = (idx: number, checked: boolean) => {
    setTodos((prevTodos) => {
      const nextTods = [...prevTodos];
      nextTods[idx].checked = checked;
      return nextTods;
    });
  };

  const onRemoveChecked = () => {
    // setTodos(todos.filter((todo) => !todo.checked));
     setTodos((prevTodos) => prevTodos.filter((todo) => !todo.checked));
  };

  return (
    <div className="App">
      <div style={appContainer}>
        <CreateTodo addTodo={addTodo} />
        {/* <Actions /> */}
        <TodoList todos={todos} onChangeCheck={onChangeCheck} />
        <RemoveBtn onRemoveChecked={onRemoveChecked} />
      </div>
    </div>
  );
}

export default App;
