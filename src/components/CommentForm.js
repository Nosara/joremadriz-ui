import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {CommentServicePropType} from '../service/CommentService';
import PropTypes from 'prop-types';

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
    </div>
  );
}

export default CommentForm;

CommentForm.propTypes = {
  service: CommentServicePropType.isRequired,
  handleSubmitComment: PropTypes.func,
};
