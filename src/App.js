import React, { Component } from 'react';
import { addTodo, removePlayer, abuse } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({ todos }) => {
   const todoList = todos.map((todo,index) => 
   <div className="mark">
   <ul key={todo.id}> 
       <li>{todo.name}</li>
       <li>{todo.comment}</li>
       <li> <button onClick={() => removePlayer(index)}>Delete comment</button>
           <button onClick={() => abuse()}>Report as abuse</button>
       </li> 
    </ul>
    </div>
    );
   const onSubmit = e => {
      e.preventDefault();
      addTodo(this.name.value, this.comment.value)
   };
   return (
      <div className="wrapper">
         <header>
            <h3>New comment</h3>
            <form onSubmit={onSubmit}>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  ref={e => (this.name = e)}
               />
               <hr/>
               <input
                  type="text"
                  name= "comment"
                  placeholder="Comment"
                  ref={e => (this.comment = e)}
               />
               <button type="submit" name="submit" value="submit">
                  Submit
               </button>
            </form>
         </header>
         <div className="main">
            <h4> Comments : {todos.length} </h4>
            <ul id="invitedList">
                {todoList}
            </ul>
         </div>
      </div>
   );
};

const mapToProps = ({ todos }) => ({ todos });

export default connect(mapToProps)(App);
