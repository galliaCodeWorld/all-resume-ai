import { config } from "./store";

export const showToast = (message, type) => {
  config.set({ message, type });
  return setTimeout(() => {
    config.set({ message: "", type: "" });
  }, 4000);
};
export const hideToast = () => config.set({ message: "", type: "" });
