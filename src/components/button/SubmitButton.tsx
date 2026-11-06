type SubmitButtonProps = {
  onClick?: () => void;
};

function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <button className="submit-button" type="button" onClick={onClick}>
      Submit
    </button>
  );
}

export default SubmitButton;
