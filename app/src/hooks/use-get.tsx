import { useState, useEffect } from "react";
import { axios } from "../config/axios";
import { AxiosResponse } from "axios";

export const useGetHook = <T extends unknown> (url: string) => {
  const [error, setError] = useState("");
  const [data, setData] = useState<T[]>([]);

  const callback = async () => {
    axios.get(url)
      .then((response: AxiosResponse) => setData(response.data))
      .catch((e) => setError(e.message));
  };

  return { data, callback, error };
};