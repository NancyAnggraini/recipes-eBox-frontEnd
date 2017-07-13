import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class AlertDialog extends Component {
  render() {
    const actions = [
      <FlatButton
        label="Save"
        primary={ true }
        keyboardFocused={ true }
        onTouchTap={ this.props.closeSaveAlert }
        />,
      <FlatButton
        label="Cancel"
        primary={ true }
        onClick={ this.props.closeCancelAlert }
        />,
    ];

    return (
      <div>
        <Dialog
          title="Confirm Save:"
          actions={ actions }
          modal={ false }
          open={ this.props.openSaveAlert }
          onRequestClose={ this.props.closeCancelAlert }
          >
        Save recipe and go back to your page?
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
