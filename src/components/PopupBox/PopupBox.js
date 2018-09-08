import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

import AlertBox from '../AlertBox';

class PopupBox extends Component {
  state = {
    alertClicked: false,
  }

  renderAlert = () => {
    this.setState({
      alertClicked: true,
    });
  }

  render() {
    const { alertClicked } = this.state;
    const { open, text } = this.props;
    return (
      <div>
        <Dialog open={open}>
          <DialogTitle>AUTOFILL MATCH</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary">
              Cancel
            </Button>
            <Button color="primary" onClick={() => this.renderAlert()} autoFocus>
              Proceed
            </Button>
          </DialogActions>
        </Dialog>
        <AlertBox open={alertClicked} />
      </div>
    );
  }
}

PopupBox.propTypes = {
  open: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default PopupBox;
