import axios from "axios";
import { HOST, GET_AGENCES, DATA_LOADING } from "./types";

export const getAgences = () => (dispatch, getState) => {
  dispatch({
    type: DATA_LOADING,
    payload: GET_AGENCES,
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //const access = getState().auth.access;
  /*if (access) {
      config.headers["Authorization"] = `JWT ${access}`;
    }*/
  axios
    .get(HOST + `api/agence/list/`, config)
    .then((res) => {
      setTimeout(() => {
        dispatch({
          type: GET_AGENCES,
          payload: res.data,
        });
        console.log(res.data);
      }, 5000);
    })
    .catch((err) => {
      //console.log(err);
      //console.log(err.response.data);
      /* refresh token method when 401 status*/
    });
};
