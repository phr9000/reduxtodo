import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../slices/create";

function CreateTodo() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    dispatch(createTodo(inputValue)); // Redux 액션 실행
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button type="submit">전송</button>
    </form>
  );
}

export default CreateTodo;
