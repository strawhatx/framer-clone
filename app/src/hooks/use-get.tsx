import { useState, useEffect } from "react";
import { axios } from "../config/axios";

export const useGetHook = (url: string) => {
  const [error, setError] = useState("");
  const [data, setData] = useState<any>([]);

  const callback = async () => {
    axios.get(url)
      .then((response: any) => setData(response.data))
      .catch((e) => setError(e.message));
  };

  return { data, callback, error };
};