import { axios } from "../config/axios";
import _axios from "axios";

interface SpaceProps {
    logo: string,
    name: string,
}

export const getUserSpaces = async (uId: string) => {
  let cancel: any;

  axios({
    method: "GET",
    url: `spaces/user/${uId}`,
    cancelToken: new _axios.CancelToken((c) => (cancel = c)),
  })
    .then((res) => { })
    .catch((e) => {
      if (_axios.isCancel(e)) return;
    });

  return () => cancel();
};

export const getSpace = async (spaceId: string) => {
    let cancel: any;
  
    axios({
      method: "GET",
      url: `spaces/${spaceId}`,
      cancelToken: new _axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => { })
      .catch((e) => {
        if (_axios.isCancel(e)) return;
      });
  
    return () => cancel();
  };

  export const postSpace = async (space: SpaceProps) => {
    let cancel: any;
  
    axios({
      method: "POST",
      url: `spaces/${spaceId}`,
      data: space,
      cancelToken: new _axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => { })
      .catch((e) => {
        if (_axios.isCancel(e)) return;
      });
  
    return () => cancel();
  };

  export const putSpace = async (space: SpaceProps) => {
    let cancel: any;
  
    axios({
      method: "PUT",
      url: `spaces/${spaceId}`,
      data: space,
      cancelToken: new _axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => { })
      .catch((e) => {
        if (_axios.isCancel(e)) return;
      });
  
    return () => cancel();
  };

  export const deleteSpace = async (spaceId: string) => {
    let cancel: any;
  
    axios({
      method: "DELETE",
      url: `spaces/${spaceId}`,
      cancelToken: new _axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => { })
      .catch((e) => {
        if (_axios.isCancel(e)) return;
      });
  
    return () => cancel();
  };


