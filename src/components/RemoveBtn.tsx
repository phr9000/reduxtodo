import { useDispatch } from "react-redux";
import { removeCheckedTodos } from "../slices/create";

function RemoveBtn() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(removeCheckedTodos())}>
      선택된 항목 삭제
    </button>
  );
}

export default RemoveBtn;
