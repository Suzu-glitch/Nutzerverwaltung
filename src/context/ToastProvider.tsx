import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ToastContext, type ToastType } from "./ToastContext";
import Toast from "../components/toast/Toast";

const TOAST_DURATION_MS = 3000;

type ToastState = {
  message: string;
  type: ToastType;
};

type ToastProviderProps = {
  children: ReactNode;
};

function ToastProvider({ children }: ToastProviderProps) {
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = useCallback(
    (message: string, type: ToastType = "success") => {
      setToast({ message, type });
    },
    [],
  );

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setToast(null);
    }, TOAST_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [toast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
