import { useState } from "react";
import { axios } from "../config/axios";

export const useDeleteHook = (url: string) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const callback = async () => {
    axios.delete(url)
      .then((response: any) => setMessage(response.data))
      .catch((e) => setError(e.message));
  };

  return { message, callback, error};
};