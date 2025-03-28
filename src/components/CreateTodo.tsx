import { useState} from "react";
import { useSelector } from "react-redux";
interface Props {
  addTodo: (text: string) => void;
}

function CreateTodo({ addTodo }: Props) {
  const [inputValue, setInputValue] = useState("");

  const writeDownContainer = {
    display: "flex",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 전송 handle
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    addTodo(inputValue);
    setInputValue('');
  };

  return (
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
  );
};

export default CreateTodo;