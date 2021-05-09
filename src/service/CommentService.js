import * as axios from 'axios';
import PropTypes from 'prop-types';

class CommentService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

    getComments = () => {
      return axios.get(this.baseUrl)
          .then((res) => res.data.map(this.parseComment))
          .catch((err) => {
            throw err;
          });
    }

    parseComment = (comment) => (comment.commentText)

    postComment = (commentText) => {
      return axios.post(this.baseUrl, {commentText: commentText})
          .catch((err) => {
            throw err;
          });
    }
}

export default CommentService;

export const CommentServicePropType = PropTypes.shape({
  postComment: PropTypes.func,
  getComments: PropTypes.func,
});
