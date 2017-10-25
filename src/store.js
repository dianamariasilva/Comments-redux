import createStore from 'redux-zero';

const TODOS = [
   {
      id: 0,
      name: 'Diana María',
      comment: 'Hi'
   }
];

const initialState = {
   todos: TODOS,
   selectedTodo: -1
};

const store = createStore(initialState);
export default store;
