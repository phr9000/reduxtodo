import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store"; // RootState 타입 정의 필요
import { createTodo, toggleTodo, removeCheckedTodos } from "./slices/create";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import RemoveBtn from "./components/RemoveBtn";

function App() {
  const dispatch = useDispatch();

  // // 할 일 추가 함수
  // const addTodo = (text: string) => {
  //   dispatch(createTodo(text));
  // };

  // 체크 상태 변경 함수
  const onChangeCheck = (id: number, checked: boolean) => {
    dispatch(toggleTodo({ id, checked }));
  };

  // // 체크된 할 일 삭제 함수
  // const onRemoveChecked = () => {
  //   dispatch(removeCheckedTodos());
  // };

  return (
    <div className="App">
      <div style={{ textAlign: "center", margin: "0 auto", width: "150px", padding: "20px" }}>
        <CreateTodo />
        <TodoList onChangeCheck={onChangeCheck} />
        <RemoveBtn />
      </div>
    </div>
  );
}

export default App;
