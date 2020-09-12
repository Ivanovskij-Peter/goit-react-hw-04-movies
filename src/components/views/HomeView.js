import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=5d8d0589fed8a27c05c2480c978a9bf4&',
    );
    // console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }
  render() {
    // console.log(this.props.match.url);
    return (
      <>
        <h1>Home page</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomeView;
