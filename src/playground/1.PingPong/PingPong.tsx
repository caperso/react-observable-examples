import { FC } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ping } from "./actions";
import { DispatchProps, PingPongProps, State } from "./types";

export const PingPong: FC<PingPongProps> = ({ isPinging, ping }) => {
  const handlePing = () => {
    ping();
  };
  return (
    <div>
      <h2>isPinging: {isPinging ? "yes" : "no"}</h2>
      <button disabled={isPinging} onClick={handlePing}>
        start pinging
      </button>
    </div>
  );
};

const mapStateToProps = (state: State) => ({ isPinging: state.isPinging });
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ping: () => dispatch(ping()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PingPong);
