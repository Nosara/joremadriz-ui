import {useState} from 'react';
import CommentForm from '../components/CommentForm';
import React, {useEffect} from 'react';
import CommentsList from '../components/CommentsList'

function Comments(props) {
    const {service} = props;
    const [comments, setComments] = useState([]);

    async function getComments() {
      const res = await service.getComments();
      setComments(res);
    }
  
    useEffect(() => {
      getComments();
    }, []);
  
    return (
      <div className="App">
        <body className="App-header">
          <div className="Comment-form">
            <CommentForm
              service={service}
              handleSubmitComment={setComments}
              comments={comments}/>
            <p>Last Comment : {comments[comments.length - 1]}</p>
            <p>
            Trying to build this website.
            </p>
          </div>
          <CommentsList comments={comments} />
        </body>
      </div>
    );
}

export default Comments