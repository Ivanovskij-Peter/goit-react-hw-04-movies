import React, { Component } from 'react';
import Axios from 'axios';

class MoviesPage extends Component {
  state = {
    query: '',
  };
  async componentDidMount() {
    const response = await Axios.get(
      ` https://api.themoviedb.org/3/search/movie?api_key=5d8d0589fed8a27c05c2480c978a9bf4&language=en-US&query=${this.state.query}&page=1&include_adult=false `,
    );
    // console.log(response.data);
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <form>
          <input type="text" />
          <button type="submit">Найти</button>
        </form>
      </>
    );
  }
}

export default MoviesPage;
