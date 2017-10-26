import store from './store';

export const addTodo = (name, comment) => {
   let oldList = store.getState().todos;
   const newList = oldList.concat({
      id: oldList.length,
      name: name,
      comment: comment,
   });
   store.setState({
      todos: newList
   });
};

export const removePlayer = (index) => {
	const addTodo =  store.getState().todos.filter( (item, idx) => idx != index );

	store.setState({
		todos: addTodo
	})
}

export const abuse = () =>{
     alert("Tell us the reason in the next link : www.sdcjsdjcs.com");
 }
