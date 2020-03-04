import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/CardList/CardList';
import { SearchBox } from './components/SearchBox/SearchBox';

const APP_TITLE = 'R_Rolodex';

// A class component gives us access to `setState()` method + `this.state` object
class App extends Component {
  constructor() {
    super(); // call to the Component class

    this.state = {
      cards: [],
      searchField: ''
    };
  }

  // LIFECYCLE METHOD
  componentDidMount = async () => {
    try {
      const apiCall = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await apiCall.json();
      this.setState({ cards: users });
    } catch (e) {
      console.log(`There was an error: ${e}`);
    }
  };

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render = () => (
    <div className="App">
      <h1 className="App__title">{APP_TITLE}</h1>
      <SearchBox
        placeholder="Filter items here…"
        handleChange={this.handleChange}
      />
      <CardList data={this.state} />
    </div>
  );
}

export default App;
