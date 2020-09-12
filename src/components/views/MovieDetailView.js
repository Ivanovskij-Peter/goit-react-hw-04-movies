import React, { Component } from 'react';
import Axios from 'axios';

class MovieDetailView extends Component {
  state = {};

  async componentDidMount() {
    const { movieId } = this.props.match.params.movieId;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=5d8d0589fed8a27c05c2480c978a9bf4&language=en-US`,
    );
    console.log(response.data);
  }
  render() {
    return (
      <div>
        <h1>страница одного фильма{this.props.match.params.movieId}</h1>
      </div>
    );
  }
}
export default MovieDetailView;
