# PingPong Demo

The ping pong demo is the one presenting on redux-observable.

0. redux

   - State managed by redux, using props provider to feed children inside.
   - State and dispatches change cause re-render;
   - mapDispatch: `const mapDispatchToProps = (dispatch) => ({ ping: () => dispatch(ping()) });`

   1. event: emit `handlePing = () => ping()`
   2. action: call action `{ type: ActionTypes.PING }`
   3. reducer: received action `{ type: ActionTypes.PING }`
   4. reducer: dispatch `case ActionTypes.PING: return { isPinging: true };`
   5. state: changes `{ isPinging: true }`
   6. epic: watcher `ofType(Action.type)` triggers
   7. epic: start flow `onPing` , do async things;
   8. epic: async response, `mergeMap()` handle the response flow.

1. store(Provider)=>PingPong
   Store wrapped PingPong, providing state and dispatches.
   At this time, epics was injected in reducer like middleware.
