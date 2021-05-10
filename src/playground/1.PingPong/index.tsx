import { Provider } from "react-redux";
import PingPong from "./PingPong";
import store from "./store";

export default function PingPongDemo() {
  return (
    <Provider store={store()}>
      <PingPong />
    </Provider>
  );
}
