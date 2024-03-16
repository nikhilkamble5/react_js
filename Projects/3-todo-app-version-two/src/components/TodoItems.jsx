import styles from './TodoItems.module.css';
import TodoItem from "./TodoItem";
const TodoItems = ({ TodoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {TodoItems.map((item) => (
          <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
