import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit">Найти</button>
      </form>
    );
  }
}
export default SearchForm;
