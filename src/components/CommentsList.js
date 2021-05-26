import '../App.css';
import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

function CommentsList({comments}) {
  return (
    <div className="Comments">
      {comments && comments.map((comment) => {
        return <Comment value={comment} key={comment} />;
      })}
    </div>
  );
}

export default CommentsList;

const CommentsPropType = PropTypes.shape({
  comment: PropTypes.string,
});

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(CommentsPropType).isRequired,
};
