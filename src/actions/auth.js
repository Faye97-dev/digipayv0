//import axios from "axios";
import { CHANGE_ROLE } from "./types";

/*export const changeRole = (role) => (dispatch) => {
  dispatch({
    type: CHANGE_ROLE,
    payload: role,
  });
};*/

export const changeRole = (role) => ({
  type: CHANGE_ROLE,
  payload: role,
});
