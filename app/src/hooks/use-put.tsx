import { useState } from "react";
import { axios } from "../config/axios";

export const usePutHook = (url: string, model: {}) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const callback = async () => {
    axios.put(url, model)
      .then((response: any) => setData(response.data))
      .catch((e) => setError(e.message));
  };

  return { data, callback, error };
};