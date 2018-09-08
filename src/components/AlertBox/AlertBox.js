import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';

class AlertBox extends Component {
  render() {
    const { open } = this.props;
    return (
      <Dialog open={open}>
        <DialogContent>Done!</DialogContent>
      </Dialog>
    );
  }
}

AlertBox.propTypes = {
  open: PropTypes.bool.isRequired,
};


export default AlertBox;
