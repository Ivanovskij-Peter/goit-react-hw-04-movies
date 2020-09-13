import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm';

class MoviesPage extends Component {
  state = {
    movies: [],
  };
  onChangeQuery = query => {
    Axios.get(
      ` https://api.themoviedb.org/3/search/movie?api_key=5d8d0589fed8a27c05c2480c978a9bf4&language=en-US&query=${query}&page=1&include_adult=false`,
    ).then(response => {
      this.setState({ movies: response.data.results });
    });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.onChangeQuery} />
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title || movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
