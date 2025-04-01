import { useSelector } from "react-redux";
interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface Props {
  todos?: Todo[];
  onChangeCheck: (idx: number, checked: boolean) => void;
}

function TodoList({ todos, onChangeCheck }: Props) {
  const listContainer = {
    display: "flex",
    flexDirection: "column" as const,
    listStyle: "none",
    padding: "0px",
  };

  return (
    <ul style={listContainer}>
      {todos?.map((todo, idx) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={(e) => onChangeCheck(todo.id, e.currentTarget.checked)}
            name={todo.text}
          />
          <label htmlFor={todo.text}>{todo.text}</label>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
