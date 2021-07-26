import PingPongDemo from "./playground/1.PingPong";
import BookingDemo from "./playground/2.Booking";

function App() {
  return (
    <div className="App">
      <p>PingPongDemo, one without epic , but use classic Redux-Observable</p>
      <PingPongDemo />
      <p>Booking Demo, progressive epic demo </p>
      <BookingDemo />
    </div>
  );
}

export default App;
