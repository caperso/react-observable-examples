export type AnyState = {
  [key: string]: any;
};

export type State = {};

// State select form wrapper state
export type SelectStore<
  S extends State = AnyState,
  T extends State = AnyState
> = (state: S) => T ;
