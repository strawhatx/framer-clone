import { useState } from "react";
import { axios } from "../config/axios";

export const usePutHook = <T extends unknown>(url: string, model: T) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");

  const callback = async () => {
    axios.put(url, model)
      .then((response: any) => setData(response.data))
      .catch((e) => setError(e.message));
  };

  return { data, callback, error };
};