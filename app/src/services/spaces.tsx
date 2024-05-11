import { axios } from "../config/axios";
import _axios from "axios";

export const getUserSpaces = async (uId: string) => {
  let cancel: any;

  axios({
    method: "GET",
    url: `spaces/${uId}`,
    cancelToken: new _axios.CancelToken((c) => (cancel = c)),
  })
    .then((res) => { })
    .catch((e) => {
      if (_axios.isCancel(e)) return;
    });

  return () => cancel();
};


