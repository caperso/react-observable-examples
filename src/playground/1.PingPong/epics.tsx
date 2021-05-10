import { Epic, ofType } from "redux-observable";
import { delay, mergeMap } from "rxjs/operators";
import { ping, pong } from "./actions";
import { ActionTypes } from "./constants";
import { PingAction, PongAction } from "./types";

export const onPing: Epic = (action$) =>
  action$.pipe(
    ofType<PingAction>(ActionTypes.PING),
    delay(1000),
    mergeMap(() => {
      console.log("Back ActionTypes.PONG");
      return [pong()];
    })
  );

export const onPong: Epic = (action$) =>
  action$.pipe(
    ofType<PongAction>(ActionTypes.PONG),
    delay(1000),
    mergeMap(() => {
      console.log("Back ActionTypes.PING");
      return [ping()];
    })
  );
