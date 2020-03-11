import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/CardList/CardList';
import { SearchBox } from './components/SearchBox/SearchBox';

require('dotenv').config();
const {
  REACT_APP_API_KEY: AI_API_KEY,
  REACT_APP_API_URL: AI_API_URL
} = process.env;
const APP_TITLE = 'R_Rolodex';
const NUM_ROLODEX_CARDS = 15;

/**
 * Build query string for the AI Portraits API
 * @param  {} gender
 */
const aiPortraits = (gender = 'female', emotion = 'joy', age = 'young-adult') =>
  `${AI_API_URL}/v1/faces?gender=${gender}&emotion=${emotion}&age=${age}&api_key=${AI_API_KEY}`;

class App extends Component {
  constructor() {
    super(); // call to the Component class

    this.state = {
      users: [],
      searchField: ''
    };
  }

  // LIFECYCLE METHOD
  componentDidMount = async () => {
    try {
      const usersApi = await fetch(
        `https://randomuser.me/api/?nat=us,dk,fr,gb&page=1&results=${NUM_ROLODEX_CARDS}`
      );
      const { results: users } = await usersApi.json();

      const females = await fetch(aiPortraits('female'));
      const femaleAvatars = await females.json();

      const males = await fetch(aiPortraits('male'));
      const maleAvatars = await males.json();

      // Populate `randomuser` API return with AI generated portraits from the `generated.photos` API
      users.forEach(user => {
        user.avatar =
          user.gender === 'female'
            ? femaleAvatars.faces.pop()
            : maleAvatars.faces.pop();
      });

      this.setState({
        users: users
      });
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
