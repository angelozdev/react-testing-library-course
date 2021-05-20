import * as React from "react";
import axios, { AxiosError } from "axios";
import { Item } from "../types";

interface InitialState {
  data: Array<Item>;
  error: AxiosError | null;
  status: "IDLE" | "LOADING" | "FAILURE" | "SUCCESS";
}

interface Action {
  payload?: any;
  type: string;
}

function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case "GET_ITEMS_LOADING":
      return {
        ...state,
        status: "LOADING",
      };
    case "GET_ITEMS_FAILURE":
      return {
        ...state,
        status: "FAILURE",
        error: action.payload,
      };
    case "GET_ITEMS_SUCCESS":
      return {
        ...state,
        data: action.payload,
        status: "SUCCESS",
      };

    default:
      return state;
  }
}

function useGetItems(type: string) {
  const initialState: InitialState = {
    data: [],
    status: "IDLE",
    error: null,
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const source = axios.CancelToken.source();
    dispatch({ type: "GET_ITEMS_LOADING" });

    axios({
      baseURL: "http://localhost:3030/",
      url: type,
      method: "GET",
      cancelToken: source.token,
    })
      .then(({ data }) => {
        dispatch({ type: "GET_ITEMS_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "GET_ITEMS_FAILURE", payload: error });
      });

    return () => source.cancel();
  }, [type]);

  return state;
}

export default useGetItems;
