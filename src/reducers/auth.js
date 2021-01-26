import { CHANGE_ROLE, DATA_LOADING } from "../actions/types.js";

const initialState = {
  //agence: null,
  //employes: [],
  //access: localStorage.getItem("access"),
  //refresh: localStorage.getItem("refresh"),
  //isAuthenticated: false,
  //isLoading: false,
  //user: null,
  role: { value: "EMPLOYE_AGENCE", label: "EMPLOYE_AGENCE" },
  //loading: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    /*case DATA_LOADING:
      if (action.payload === CHANGE_ROLE) {
        return {
          ...state,
          loading: "hello from auth js",
        };
      }*/

    default:
      return state;
  }
}
