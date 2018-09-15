import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';


const SearchButton = ({ clickHandler }) => {
  return (
    <div style={{ marginLeft: '40px' }}>
      <button
        type="button"
        onClick={() => clickHandler()}
        style={{
          padding: '3px 20px',
          fontSize: '0.8em',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f00',
          color: '#fff',
          borderRadius: '25px',
        }}
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
