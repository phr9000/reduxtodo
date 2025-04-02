import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../app/store';

import { toggleTodo, selectTodo } from "../../src/slices/create";


// interface Props {
//   onChangeCheck: (idx: number, checked: boolean) => void;
// }



function TodoList() {
  // todo data
  // const todoData = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const todoData = useSelector(selectTodo);
  const listContainer = {
    display: "flex",
    flexDirection: "column" as const,
    listStyle: "none",
    padding: "0px",
    margin: "2px"
  };

  return (
    <div>
      <ul style={listContainer}>
        {todoData?.map((todo, idx) => (
          <li key={todo.id}>
            <label htmlFor={`todo-${todo.id}`}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={(e) =>
                  dispatch(
                    toggleTodo({
                      id: todo.id,
                      checked: e.currentTarget.checked,
                    })
                  )
                }
                name={todo.text}
                id={`todo-${todo.id}`}
              />
              {todo.text}
            </label>                                                            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
