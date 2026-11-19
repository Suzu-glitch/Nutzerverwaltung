type CancelButtonProps = {
  onClick: () => void;
};

function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <button className="cancel-button" type="button" onClick={onClick}>
      Abbrechen
    </button>
  );
}

export default CancelButton;
