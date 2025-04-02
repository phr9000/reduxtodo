import { useSelector } from "react-redux";
import { RootState } from '../app/store';

import {selectTodo} from '../../src/slices/create';


interface Props {
  onChangeCheck: (idx: number, checked: boolean) => void;
}



function TodoList({ onChangeCheck }: Props) {
  // todo data
  // const todoData = useSelector((state: RootState) => state.todo.todos);

  const todoData = useSelector(selectTodo);
  const listContainer = {
    display: "flex",
    flexDirection: "column" as const,
    listStyle: "none",
    padding: "0px",
  };

  return (
    <div>
      <ul style={listContainer}>
        {todoData?.map((todo, idx) => (
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
    </div>
  );
}

export default TodoList;
