import React from 'react';

class Notification {
  reference = React.createRef();

  close = key => {
    if (this.reference.current) this.reference.current.closeSnackbar(key);
  };

  success = message => {
    if (this.reference.current) {
      this.reference.current.enqueueSnackbar(message, {
        autoHideDuration: 3000,
        preventDuplicate: true,
        variant: 'success',
      });
    }
  };

  error = message => {
    if (this.reference.current) {
      this.reference.current.enqueueSnackbar(message, {
        autoHideDuration: 3000,
        preventDuplicate: true,
        variant: 'error',
      });
    }
  };
}

const notification = new Notification();
export default notification;
