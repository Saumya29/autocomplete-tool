import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';


const SearchButton = ({ clickHandler }) => {
  return (
    <div>
      <Button onClick={() => clickHandler()} style={{ padding: '3px 14px', fontSize: '0.8em' }} variant="outlined" color="secondary">
        <SearchIcon />
        SEARCH
      </Button>
    </div>
  );
};

SearchButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};


export default SearchButton;
