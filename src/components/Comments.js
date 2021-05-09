import '../App.css';
import React from 'react';
import Comment from '../components/Comment';
import PropTypes from 'prop-types';

function Comments({comments}) {
  return (
    <div className="Comments">
      {comments && comments.map((comment) => {
        return <Comment value={comment} key={comment} />;
      })}
    </div>
  );
}

export default Comments;

const CommentsPropType = PropTypes.shape({
  comment: PropTypes.string,
});

Comments.propTypes = {
  comments: PropTypes.arrayOf(CommentsPropType).isRequired,
};
