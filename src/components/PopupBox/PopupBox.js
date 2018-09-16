import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PopupBox.css';


class PopupBox extends Component {
  onProceedHandler = () => {
    window.alert('Done!');
  }

  onModalClickHandler = (e) => {
    const { toggleModalState } = this.props;
    if (e.target.className === 'modal') {
      toggleModalState();
    }
  }

  render() {
    const { open, text } = this.props;
    return (
      <div
        className="modal"
        style={open === true ? { display: 'inline-block' } : { display: 'none' }}
        onClick={this.onModalClickHandler}
      >
        <div className="modal-content">
          <div className="modal-title">
            { text }
          </div>
          <div className="modal-body">
            <p>Hello</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="modal-btn modal-close-btn">Close</button>
            <button type="button" className="modal-btn modal-proceed-btn" onClick={this.onProceedHandler}>Proceed</button>
          </div>
        </div>
      </div>
    );
  }
}

PopupBox.propTypes = {
  open: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggleModalState: PropTypes.func.isRequired,
};

export default PopupBox;
