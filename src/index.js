import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './navbar';
import TodoList from "./todoList";

const App = () =>{

    return(
        <div>
            <Navbar/>
            <div  className="container py-5">  
             <TodoList/>
             </div>
         
            </div>
    )
}
ReactDom.render(<App/>, document.getElementById('root'))
