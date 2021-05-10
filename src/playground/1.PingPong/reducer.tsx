import { Reducer } from "redux";
import { ActionTypes } from "./constants";
import { PingPongActions, State } from "./types";

const initState: State = { isPinging: false };

const pingPongReducer: Reducer<State, PingPongActions> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case ActionTypes.PING:
      return { isPinging: true };

    case ActionTypes.PONG:
      return { isPinging: false };

    default:
      return state;
  }
};

export default pingPongReducer;
