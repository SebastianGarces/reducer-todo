export const types = {
  TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
  ADD_TODO: "ADD_TODO",
  CLEAR_COMPLETED: "CLEAR_COMPLETED",
};

export const todoReducer = (state, action) => {
  return action.type === types.TOGGLE_COMPLETED
    ? {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      }
    : action.type === types.ADD_TODO
    ? {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), todo: action.payload.todo, completed: false },
        ],
      }
    : action.type === types.CLEAR_COMPLETED
    ? { ...state, todos: state.todos.filter((todo) => !todo.completed) }
    : state;
};

export const initialState = {
  todos: [],
};
