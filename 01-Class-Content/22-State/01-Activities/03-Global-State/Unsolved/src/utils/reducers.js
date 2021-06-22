import { useReducer } from 'react';
import { UPDATE_BOOKS, UPDATE_CURRENT_BOOK } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_BOOKS:
      return {
        ...state,
        books: [...action.books],
      };

    case UPDATE_CURRENT_BOOK:
      return {
        ...state,
        currentBook: { ...action.currentBook },
      };
    default:
      return state;
  }
};

export function useBookReducer(initialState) {
  return useReducer(reducer, initialState);
}
