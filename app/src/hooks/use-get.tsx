import { useState, useEffect } from "react";
import { axios } from "../config/axios";

export const useGetHook = (url: string) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  const callback = async () => {
    axios.get(url)
      .then((response: any) => setData(response.data))
      .catch((e) => setError(e.message));
  };

  useEffect(() => {
    callback();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, error };
};