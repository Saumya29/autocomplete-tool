import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reactStringReplace from 'react-string-replace';

import PopupBox from '../PopupBox';
import './Suggestions.css';

class Suggestions extends Component {
  state = {
    popUpClicked: false,
    text: '',
  }

  renderPopUp = (resultValue) => {
    this.setState({
      popUpClicked: true,
      text: resultValue,
    });
  };

  render() {
    const { popUpClicked, text } = this.state;
    const { results, highlightedText } = this.props;
    return (
      <div>
        <ul className="text-center pl-0 list-style-none m-0">
          {
            results
              && results.map(result => (
                <li className="autocomplete-item" onClick={() => this.renderPopUp(result)} key={result.toString()}>
                  {
                    reactStringReplace(result, highlightedText, (match, i) => (
                      <span key={i} className="highlight">{match}</span>
                    ))
                  }
                </li>
              ))
          }
          {
            (results.length === 0 && highlightedText !== '')
              ? <div style={{ padding: '1em' }}>No Match</div>
              : null
          }
        </ul>
        <PopupBox open={popUpClicked} text={text} />
      </div>
    );
  }
}

Suggestions.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
  highlightedText: PropTypes.string.isRequired,
};

export default Suggestions;
