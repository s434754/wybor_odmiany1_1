import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        newItem: "",
        list: []
      };
    }
  
    //incorporating local storage 
    componentDidMount() {
      this.hydrateStateWithLocalStorage();
  
      // add event listener to save state to localStorage
      // when user leaves/refreshes the page
      window.addEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
      );
    }
  
    componentWillUnmount() {
      window.removeEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
      );
  
      // saves if component has a chance to unmount
      this.saveStateToLocalStorage();
    }
  
    hydrateStateWithLocalStorage() {
      // for all items in state
      for (let key in this.state) {
        // if the key exists in localStorage
        if (localStorage.hasOwnProperty(key)) {
          // get the key's value from localStorage
          let value = localStorage.getItem(key);
  
          // parse the localStorage string and setState
          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            // handle empty string
            this.setState({ [key]: value });
          }
        }
      }
    }
  
    saveStateToLocalStorage() {
      // for every item in React state
      for (let key in this.state) {
        // save to localStorage
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    }
  
    updateInput(key, value) {
      // update react state
      this.setState({ [key]: value });
    }
  
    addItem() {
      // create a new item with unique id
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
   
      };
  
      // copy current list of items
      const list = [...this.state.list];
  
      // add the new item to the list
      list.push(newItem);
  
      // update state with new list, reset the new item input
      this.setState({
        list,
        newItem: ""
      });
    }
  
    deleteItem(id) {
      // copy current list of items
      const list = [...this.state.list];
      // filter out the item being deleted
      const updatedList = list.filter(item => item.id !== id);
  
      this.setState({ list: updatedList });
    }
    
    render() {
      return (
        <div>
  
        <h1 className='napis1'>Kreator wyboru odmiany</h1>
            <p className='klasa1'>Klasa I</p>
            <p className='klasa2'>Klasa II</p>
            <p className='pole2_1'>3a</p>
            <p className='pole2_2'>3b</p>
            <div className='pole1' ></div>
            <div className='pole2' ></div>
            
          <div className="container">
          <div className='wynik'
            style={{
              padding: 30,
              textAlign: "left",
              maxWidth: 500,
              margin: "auto"
              
            }}
          >
            Klasy
            <br />
          <input
              className='pole1'
              type="text"
              placeholder="Type item here"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
          />
            <button
              className='przycisk1' src='img/przycisk2.svg'
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
            <img src='img/przycisk2.svg' />
            </button>
            <br /> <br />
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                      <i class="material-icons">x</i>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        </div>
      );
    }
  }
  
  
