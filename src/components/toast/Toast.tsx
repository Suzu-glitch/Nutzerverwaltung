import type { ToastType } from "../../context/ToastContext";

type ToastProps = {
  message: string;
  type: ToastType;
};

function Toast({ message, type }: ToastProps) {
  return (
    <div className={`toast toast--${type}`} role="status">
      {message}
    </div>
  );
}

export default Toast;
