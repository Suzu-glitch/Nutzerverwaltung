import { FaRegTimesCircle } from "react-icons/fa";

type DeleteButtonProps = {
  onClick?: () => void;
};

function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button
      className="delete-button"
      type="button"
      onClick={onClick}
      aria-label="Löschen"
    >
      <FaRegTimesCircle />
    </button>
  );
}

export default DeleteButton;
