import { createSelector } from '@reduxjs/toolkit';

// const getLoading = state => state.todos.loading;


const getAllContacts = state => state.contacts.items;

// const getTotalTodoCount = state => {
//   const todos = getAllTodos(state);
//   return todos.length;
// };


// const getVisibleTodos = createSelector(
//   [getAllTodos, getFilter],
//   (todos, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return todos.filter(({ description }) =>
//       description.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );

const todosSelectors = {
//    getLoading,
//   getFilter,
//   getVisibleTodos,
  getAllContacts
};
export default todosSelectors;