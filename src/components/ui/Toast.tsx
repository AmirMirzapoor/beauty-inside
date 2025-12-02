"use client";

import { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
}

const icons = {
  success: <FaCheckCircle className="text-green-500 text-xl" />,
  error: <FaExclamationCircle className="text-red-500 text-xl" />,
  info: <FaInfoCircle className="text-blue-500 text-xl" />,
};

const styles = {
  success: "border-green-500 bg-green-50 text-green-900",
  error: "border-red-500 bg-red-50 text-red-900",
  info: "border-blue-500 bg-blue-50 text-blue-900",
};

export default function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // محو شدن خودکار بعد از ۴ ثانیه
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className={`fixed bottom-6 left-6 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border-r-4 min-w-[300px] ${styles[type]}`}
        >
          {icons[type]}
          <p className="font-bold text-sm flex-1">{message}</p>
          <button onClick={onClose} className="opacity-50 hover:opacity-100 transition-opacity">
            <FaTimes />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}