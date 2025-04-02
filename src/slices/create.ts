import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 초기 상태 타입 정의
interface TodoState {
    id: number,
    text: string,
    checked: boolean
}

// 초기 상태 설정
const initialState: { todos: TodoState[] } = {
   todos: [
    { id: 1, text: "text1", checked: true },
    { id: 2, text: "text2", checked: false },
    { id: 3, text: "text3", checked: false },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState, // 초기 상태 적용
  reducers: {

    // 새 할 일 추가
    createTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoState = {
        id: new Date().getTime(),
        text: action.payload,
        checked: false,
      };

      state.todos.push(newTodo);
    },

    // 체크 상태 변경
    toggleTodo: (
      state,
      action: PayloadAction<{ id: number; checked: boolean }>
    ) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.checked = action.payload.checked;
      }
    },

    // 체크된 할 일 삭제
    removeCheckedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.checked);
    },
  },
  selectors: {
    selectTodo: (state) => state.todos,
  }
});

export const { createTodo, toggleTodo, removeCheckedTodos } = todoSlice.actions;

export default todoSlice.reducer;

export const { selectTodo } = todoSlice.selectors;
