import React, { Component } from 'react';

import SearchButton from './components/SearchButton';
import SearchTextBox from './components/SearchTextBox';


class App extends Component {
  state = {
    visible: false,
  }

  onClickHandler = () => {
    this.setState({
      visible: true,
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <div className="p-1">
        <div className="text-center m-3">
          <h2>Welcome, Guest!</h2>
        </div>
        <div className="flex-centered">
          {
            visible
            && <SearchTextBox />
          }
          <SearchButton clickHandler={this.onClickHandler} />
        </div>
      </div>
    );
  }
}

export default App;
