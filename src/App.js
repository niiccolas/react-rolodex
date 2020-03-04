import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/CardList/CardList';
import { SearchBox } from './components/SearchBox/SearchBox';

const APP_TITLE = 'R_Rolodex';
const NUM_USERS = 15;
// A class component gives us access to `setState()` method + `this.state` object
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
        `https://randomuser.me/api/?nat=us,dk,fr,gb&page=1&results=${NUM_USERS}`
      );
      const { results: users } = await usersApi.json();

      const females = await fetch(
        `https://api.generated.photos/api/v1/faces?gender=female&emotion=joy&age=young-adult&api_key=RmggqtzTU2z8vP7m8rYqDw`
      );
      const femaleAvatars = await females.json();

      const males = await fetch(
        `https://api.generated.photos/api/v1/faces?gender=male&emotion=joy&age=young-adult&api_key=RmggqtzTU2z8vP7m8rYqDw`
      );
      const maleAvatars = await males.json();

      const userPortraits = await fetch(
        `https://api.generated.photos/api/v1/faces?per_page=${NUM_USERS}&emotion=joy&age=young-adult&api_key=RmggqtzTU2z8vP7m8rYqDw`
      );
      const { faces: avatars } = await userPortraits.json();

      users.forEach(user => {
        user.avatar =
          user.gender === 'female'
            ? femaleAvatars.faces.pop()
            : maleAvatars.faces.pop();
        // (user.avatar = )
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
