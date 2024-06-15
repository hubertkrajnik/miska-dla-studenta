import { v4 as uuid } from 'uuid';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  DELETE_TODO: 'delete-todo',
  UPDATE_TODO: 'update-todo',
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      if (action.payload.priority === 'High') {
        return [
          { id: uuid(), name: action.payload.newTodo, priority: action.payload.priority },
          ...state,
        ];
      }
      if (action.payload.priority === 'Medium') {
        let half = Math.floor(state.length / 2);
        let firstHalf = state.slice(0, half);
        let secondHalf = state.slice(half);
        return [
          ...firstHalf,
          { id: uuid(), name: action.payload.newTodo, priority: action.payload.priority },
          ...secondHalf,
        ];
      }
      return [
        ...state,
        { id: uuid(), name: action.payload.newTodo, priority: action.payload.priority },
      ];
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.newTodo };
        }
        return todo;
      });
    default:
      return state;
  }
}
