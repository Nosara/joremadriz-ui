import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {CommentServicePropType} from '../service/CommentService';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        color: 'white',
      },
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor: 'white',
          border: '0',
        },
      },
    },
    MuiInputLabel: {
      root: {
        'fontFamily': 'monospace',
        'color': 'white',
        '&$focused': { // increase the specificity for the pseudo class
          color: 'white',
        },
      },
    },
    MuiButton: {
      root: {
        fontFamily: 'monospace',
        color: 'white',
        margin: '10px',
      },
      outlined: {
        borderColor: 'white',
      },
    },
  },
});


function CommentForm(props) {
  const {service, handleSubmitComment} = props;
  const [comment, setComment] = useState({});

  useEffect(() => {
    setComment('');
  }, []);

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  async function handleCommentSubmit() {
    await service.postComment(comment);
    setComment('');
    handleSubmitComment(await service.getComments());
  }

  return (
    <div id="comment-form">
      <ThemeProvider theme={theme}>
        <TextField
          id="outlined-secondary"
          label="Leave a comment"
          variant="outlined"
          name = "comment"
          value = {comment}
          onChange={handleCommentChange}
          inputProps={{maxLength: 30}}
        />
        <Button variant="outlined" onClick={handleCommentSubmit}>Send</Button>
      </ThemeProvider>
    </div>
  );
}

export default CommentForm;

CommentForm.propTypes = {
  service: CommentServicePropType.isRequired,
  handleSubmitComment: PropTypes.func,
};
