import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

import './SearchButton.css';


const SearchButton = ({ clickHandler }) => {
  return (
    <div className="button-container" style={{ marginLeft: '40px' }}>
      <button
        type="button"
        onClick={() => clickHandler()}
        className="search-button"
      >
        <SearchIcon />
        SEARCH
      </button>
    </div>
  );
};

SearchButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default SearchButton;
