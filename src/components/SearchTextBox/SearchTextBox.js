import React, { Component } from 'react';

import Suggestions from '../Suggestions';


class SearchTextBox extends Component {
  state = {
    query: '',
    results: [
      'extravagant',
      'humorous',
      'nothing',
      'tester',
      'developer',
      'javascript',
      'java-spring',
      'humming',
      'notting-hill',
      'pipeline',
      'linting',
      'compassion',
      'conference',
      'time-zones',
      'games',
    ],
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    });
  }

  render() {
    const { query, results } = this.state;
    let showingResults;

    if (query) {
      showingResults = results
        .filter(result => result.includes(query));
    } else {
      showingResults = [];
    }

    return (
      <div>
        <input
          className="input-box"
          type="text"
          placeholder="Type to start searching..."
          value={query}
          onChange={event => this.updateQuery(event.target.value)}
        />
        <Suggestions results={showingResults} highlightedText={query} />
      </div>
    );
  }
}


export default SearchTextBox;
