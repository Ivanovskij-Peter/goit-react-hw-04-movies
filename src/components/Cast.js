import Axios from 'axios';
import React, { Component } from 'react';

class Cast extends Component {
  state = {
    character: '',
    name: '',
    profile_path: '',
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5d8d0589fed8a27c05c2480c978a9bf4`,
    );
    this.setState({ ...response.data });
  }
  render() {
    return (
      <div>
        {/* <h1>this is photo</h1> */}
        <img
          src={`https://image.tmdb.org/t/p/w300${this.state.profile_path}`}
          alt=""
        />
      </div>
    );
  }
}
export default Cast;
