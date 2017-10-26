import React, { Component } from 'react';
import { addTodo, removePlayer, abuse } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({ todos }) => {
   const todoList = todos.map((todo,index) => 
   <div className="text-center">
   <ul key={todo.id} className="mark"> 
       <div className="row">
       <li className="col-lg-12">{todo.name}</li>
       <hr/>
       <li className="col-lg-12">{todo.comment}</li>
       </div>
       <li><div className="row"> 
            <div className="col-lg-6 col-sx-12">
                <button className="text-right" onClick={() => removePlayer(index)}>Delete comment</button>
            </div>
            <div className="col-lg-6 col-sx-12">
                <button className="text-left" onClick={() => abuse()}>Report as abuse</button>
            </div>
           </div>
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
            <div className="group">
                <br/>
               <input
                  type="text"
                  name="name"
                  ref={e => (this.name = e)}
                  required
                  className="input form-control"
               />
               <span className="highlight" />
               <label className="label"> Name</label>
            </div>
            <div className="group">  
                <br/>
               <input
                  type="text"
                  name= "comment"
                  required
                  className="input form-control"
                  ref={e => (this.comment = e)}
               />
               <span className="highlight" />
               <label className="label">Comment</label>
               <button type="submit" name="submit" value="submit" >
                  Submit
               </button>
               </div>
            </form>
         </header>
         <div className="main">
            <h4> Comments : {todos.length} </h4>
            <ul id="invitedList" className="comments">
                {todoList}
            </ul>
         </div>
      </div>
   );
};

const mapToProps = ({ todos }) => ({ todos });

export default connect(mapToProps)(App);
