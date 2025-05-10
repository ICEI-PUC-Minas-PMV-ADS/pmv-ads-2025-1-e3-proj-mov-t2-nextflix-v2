import React from 'react';

function Comment({ comment }) {
  return(
    <div className="comment" style={{ color: 'white' }}>
      <p>{comment.Texto}</p>
      <p className="author" style={{ color: 'white' }}>Usuário: {comment.ID_Usuario}</p>
      <p className="timestamp" style={{ color: 'white' }}>Data: {comment.Data_Comentario}</p>
    </div>
  );
}

export default Comment;