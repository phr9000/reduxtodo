import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 초기 상태 타입 정의
interface TodoState {
    id: number,
    text: string,
    checked: boolean
}

// 초기 상태 설정
const initialState: TodoState = {
   id: 0, 
   text: '',
   checked: false
};

export const counterSlice = createSlice({
  name: "create",
  initialState, // 초기 상태 적용
  reducers: {
    createTodo: (state) => {
      state.value += 1;
    },
    todoList: (state) => {
      state.value -= 1;
    },
    removeBtn: (state) => {
      state.value += 1;
    },
  },
});

export const { createTodo, todoList, removeBtn } = counterSlice.actions;

export default counterSlice.reducer;
