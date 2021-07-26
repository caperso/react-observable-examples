import { Reducer } from "redux";
import { ActionTypes } from "./constants";
import { PingPongActions, State } from "./types";

const initState: State = { isPinging: false, isEverPinged: false };

const pingPongReducer: Reducer<State, PingPongActions> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case ActionTypes.PING:
      return { isPinging: true, isEverPinged: true };

    case ActionTypes.PONG:
      return { ...state, isPinging: false };

    default:
      return state;
  }
};

export default pingPongReducer;
