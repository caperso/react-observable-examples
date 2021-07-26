import { Action } from "redux";
import { ActionTypes } from "./constants";

export interface PingAction extends Action<ActionTypes.PING> {}
export interface PongAction extends Action<ActionTypes.PONG> {}

export interface PingPongActions extends Action<ActionTypes> {}

export interface PingPayload {}
export interface PongPayload {}

export type Ping = () => PingAction;
export type Pong = () => PongAction;

export interface State {
  isEverPinged: boolean;
  isPinging: boolean;
}

export interface PingPongOwnProps {}

export interface DispatchProps {
  ping: () => void;
}

export type PingPongProps = State & PingPongOwnProps & DispatchProps;
