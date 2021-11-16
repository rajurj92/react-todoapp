import React, { Component } from "react";
import TodoItems from "./todoItems";
import "./todoList.css";
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[]
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
    this.setState({
      items: filteredItems
    })
  }
  addItem(e){
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem)
         
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

    
  
  render() {
    return (
      <div className="todoListMain col-6">
        <form onSubmit={this.addItem}>
          <div className="form-group">
            <input  ref={(a) => this._inputElement = a}  className="form-control" placeholder="enter task">
            </input>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoList;