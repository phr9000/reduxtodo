import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import RemoveBtn from "./components/RemoveBtn";
import { useSelector, useDispatch } from "react-redux";
import { createTodo, toggleTodo, removeCheckedTodos } from "./slices/create";

function App() {
  const dispatch = useDispatch();

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

  const addTodo = (text: string) => {
    // console.log("text >>>>>>>>>", text);

    // setTodos((prev) => [
    //   ...prev,
    //   { id: new Date().getTime(), text, checked: false },
    // ]);
    dispatch(createTodo(text));
  };

  const onChangeCheck = (id: number, checked: boolean) => {
    // setTodos((prevTodos) => {
    //   const nextTods = [...prevTodos];
    //   nextTods[idx].checked = checked;
    //   return nextTods;
    // });
    dispatch(toggleTodo({id, checked}));
  };

  const onRemoveChecked = () => {
    // setTodos(todos.filter((todo) => !todo.checked));
    // 비동기 고려 아래 코드로 적용
    //  setTodos((prevTodos) => prevTodos.filter((todo) => !todo.checked));
    dispatch(removeCheckedTodos());
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
