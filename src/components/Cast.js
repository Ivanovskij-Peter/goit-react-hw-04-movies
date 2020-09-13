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
    return <h1> это список актеров</h1>;
  }
}
export default Cast;
