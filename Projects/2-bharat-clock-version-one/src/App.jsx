import ClockHeading from "../components/ClockHeading";
import ClockSlogan from "../components/ClockSlogan";
import ClockTime from "../components/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;
