// utils/toastHelper.js
import { toast } from "react-toastify";

export const showToast = (message) => {
  toast.success(message, {
    position: "bottom-right",
  });
};
