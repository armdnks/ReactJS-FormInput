import { createContext, useContext, useReducer } from "react";
import todoReducer from "./todo-reducer";

const initialState = {
  // ui
  is_loading: false,
  is_show_alert: false,
  // todo
  todos: [],
  todo: {
    title: "",
    body: "",
    category: "",
    is_complete: false,
  },
  todo_category_options: [],
  is_editing: false,
};

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const value = {
    ...state,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default function useTodoContext() {
  return useContext(TodoContext);
}
