import './App.css';
import {useState} from 'react';
import CommentService from './service/CommentService';
import CommentForm from './components/CommentForm';
import Comments from './components/Comments';
import SocialLinks from './components/SocialLinks';
import React, {useEffect} from 'react';

const baseUrl = 'https://joremadriz-api.herokuapp.com/comment';

const commentService = new CommentService(baseUrl);

function App() {
  const [comments, setComments] = useState([]);

  async function getComments() {
    const res = await commentService.getComments();
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
            service={commentService}
            handleSubmitComment={setComments}
            comments={comments}/>
          <p>Last Comment : {comments[comments.length - 1]}</p>
          <p>
          Trying to build this website.
          </p>
          <SocialLinks/>
        </div>
        <Comments comments={comments} />
      </body>
    </div>
  );
}

export default App;
