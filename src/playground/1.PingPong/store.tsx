import { applyMiddleware, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { onPing, onPong } from "./epics";
import pingPongReducer from "./reducer";

const epicMiddleware = createEpicMiddleware();

export default function configStore() {
  const store = createStore(pingPongReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(combineEpics(onPing, onPong));

  return store;
}
