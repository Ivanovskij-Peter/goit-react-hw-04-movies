import Axios from 'axios';
import React, { Component } from 'react';

class Reviews extends Component {
  state = {
    content: '',
    author: '',
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5d8d0589fed8a27c05c2480c978a9bf4&language=en-US&page=1`,
    );
    this.setState({ ...response.data });
  }
  render() {
    const { content, author } = this.state;
    return <h1> это список отзывов</h1>;
  }
}
export default Reviews;
