import { useSelector } from "react-redux";
interface Props {
  onRemoveChecked: () => void;
}

function RemoveBtn({ onRemoveChecked }: Props) {
  return (
    <button type="button" onClick={onRemoveChecked}>
      선택된 항목 삭제
    </button>
  );
}

export default RemoveBtn;
