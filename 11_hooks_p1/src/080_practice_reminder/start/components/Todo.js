import List from "./List";
import Form from "./Form";
import { ToDoProvider } from "../contexts/ToDoContext";

const Todo = () => {
  return (
    <ToDoProvider>
      <List />
      <Form />
    </ToDoProvider>
  );
};
export default Todo;
