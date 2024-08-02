import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setVal] = useState("");

const onButtonClick = (buttonText) => {
  if (buttonText === "c") {
    setVal(""); // Reset calculator value
  } else if (buttonText === "=") {
    const result = eval(calVal);
    setVal(result); // Set calculator value to the result
  } else {
    const newDisplayValue = calVal + buttonText;
    setVal(newDisplayValue); // Update calculator value
  }
};


  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer
        onButtonClick={onButtonClick}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
