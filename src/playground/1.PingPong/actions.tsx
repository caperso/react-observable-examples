import { ActionTypes } from "./constants";
import { Ping, Pong } from "./types";

export const ping: Ping = () => ({
  type: ActionTypes.PING,
});

export const pong: Pong = () => ({
  type: ActionTypes.PONG,
});

