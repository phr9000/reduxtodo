import { useState, useEffect } from "react";

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface Props {
  todos?: Todo[];
  onChangeCheck: (idx: number, checked: boolean) => void;
};


function TodoList({ todos, onChangeCheck }: Props) {
  const listContainer = {
    display: "flex",
    flexDirection: "column" as const,
    listStyle: "none",
    padding: "0px",
  };


  const [checked, setChecked] = useState<number[]>([]);

  // checkbox handle
  const handleCheck = (id: number, checked: boolean) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // );

    // TODO: todo id setChecked에 담기

    // if (checked) {
    //   setChecked((prev) => [...prev, id]);

    //   return;
    // }

    // if (!checked && todos.includes(id)) {
    //   setChecked(todos.filter((item) => item !=== id));
    //   return;
    // }

    // return; 

  };

  useEffect(()=> {
    console.log('todos>>>>>>>>', todos);
  }, []);

  return (
    <ul style={listContainer}>
      {todos?.map((todo, idx) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={(e) => onChangeCheck(idx, e.currentTarget.checked)}
            name={todo.text}
          />
          <label htmlFor={todo.text}>{todo.text}</label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;