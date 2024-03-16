// const Item = (Props) => {

//   return (
//     <li  className="list-group-item">
//       {Props.foodItem}
//     </li>
//   );
// };

// export default Item;

// // using Aray destructuring👇🔥🔥
// const Item = (Props) => {
//   let { foodItem } = props;
//   return <li className="list-group-item">{foodItem}</li>;
// };

// using Aray destructuring👇🔥🔥

import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(`${foodItem} being bought`);
  };
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
