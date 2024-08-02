import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "c",
    "1",
    "2",
    "3",
    "4",
    "+",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
{buttonNames.map((buttonName, index) => (
  <button
    key={index} // Use index as key prop
    className={styles.button}
    onClick={() => onButtonClick(buttonName)} // Call onButtonClick with buttonName as parameter
  >
    {buttonName}
  </button>
))}

    </div>
  );
};
export default ButtonsContainer;
// 6.43