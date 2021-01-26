import { GET_AGENCES, DATA_LOADING } from "../actions/types.js";

const initialState = {
  agences: { payload: [], loading: null },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DATA_LOADING:
      if (action.payload === GET_AGENCES) {
        return {
          ...state,
          agences: {
            ...state.agences,
            loading: true,
          },
        };
      }
    case GET_AGENCES:
      return {
        ...state,
        agences: {
          ...state.agences,
          payload: action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
}
