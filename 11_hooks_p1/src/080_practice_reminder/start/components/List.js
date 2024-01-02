import { useToDo } from "../contexts/ToDoContext";
import Item from "./Item";

const List = () => {
  const todos = useToDo();

  return (
    <div>
      {todos.map((todo) => (
        <Item todo={todo} />
      ))}
    </div>
  );
};

export default List;
