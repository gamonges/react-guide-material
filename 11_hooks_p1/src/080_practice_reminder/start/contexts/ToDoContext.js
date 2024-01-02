import { createContext, useContext, useReducer } from "react";

const ToDoContext = createContext();
const ToDoDispatchContext = createContext();

const todosList = [
  {
    id: 1,
    content: "店予約する",
  },
  {
    id: 2,
    content: "卵買う",
  },
  {
    id: 3,
    content: "郵便出す",
  },
];
const reducer = (state, payload) => {
  console.log(payload);
  switch (payload.type) {
    case "create":
      return [...state, payload.todo];
    case "edit":
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, ...payload.todo } : todo
      );
    case "delete":
      return state.filter((todo) => {
        return todo.id !== payload.todo.id;
      });

    default:
      throw new Error("不正な入力です");
  }
};

export const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, todosList);

  return (
    <ToDoContext.Provider value={state}>
      <ToDoDispatchContext.Provider value={dispatch}>
        {children}
      </ToDoDispatchContext.Provider>
    </ToDoContext.Provider>
  );
};

export const useToDo = () => useContext(ToDoContext);
export const useToDoDispatch = () => useContext(ToDoDispatchContext);
