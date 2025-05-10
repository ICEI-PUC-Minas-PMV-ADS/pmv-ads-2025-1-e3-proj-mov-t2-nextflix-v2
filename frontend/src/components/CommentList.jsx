import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map(comment => (
        <Comment key={comment.ID_Comentario} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;