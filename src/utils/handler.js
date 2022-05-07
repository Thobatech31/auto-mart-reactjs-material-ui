import Notification from './notification';

class Handler {
  onChange(name, type, value, confirmValue) {
    if (name) {
      this.setState({
        error: Handler.validate(type, value, confirmValue),
        [name]: value,
      });
    }
  }

  submit = (data, success, error) => {
    let errorText = '';
    const dataKeys = Object.keys(data);
    const responses = dataKeys.filter(key => {
      if (typeof data[key].compulsory !== 'undefined' && data[key].compulsory === false) {
        return true;
      }

      const valid = Handler.validate(data[key].type, data[key].value, data[key].confirmValue, key);
      if (!errorText) {
        // Only report the first error to occur
        errorText = valid;
      }
      return !valid;
    });

    if (
      responses.length === dataKeys.length
    ) {
      if (success) {
        success();
      }
    } else {
      if (error) {
        error();
      }
      Notification.error(
        errorText || 'Please fill in the form correctly.'
      );
    }
  };

  static validate = (type, value, confirmValue, title) => {
    let error = null;
    let valid = true;
    let regex;
    if (type === 'email') {
      regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      valid = regex.test(value);
      error = 'Please enter a valid email address.';
    } else if (type === 'password') {
      regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      valid = regex.test(value);
      error = 'Please enter at least a number, a capital letter, and a minimum of 8 characters.';
    } else if (type === 'confirm-password') {
      valid = confirmValue === value;
      error = 'Please confirm your password.';
    } else if (type === 'text') {
      regex = /^\s*$/;
      valid = !regex.test(value);
      error = `Please enter a valid text${title ? ` for the ${title.split('_').join(' ')}.` : '.'}`;
    } else if (type === 'number') {
      regex = /^\d+$/;
      valid = regex.test(value);
      if (value <= confirmValue) {
        valid = false;
      }
      error = `Please enter a valid number${title ? ` for the ${title.split('_').join(' ')}.` : '.'}`;
    }

    if (!valid) {
      return error;
    }
    return '';
  };
}

const handler = new Handler();
export default handler;
