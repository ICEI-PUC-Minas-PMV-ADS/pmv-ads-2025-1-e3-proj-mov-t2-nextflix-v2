import React, { useState } from 'react';

function CommentForm({ onAddComment, ID_Usuario, ID_Titulo }) {
  const [Texto, setTexto] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Texto.trim() !== '') {
      const newComment = {
        ID_Usuario: ID_Usuario,
        ID_Titulo: ID_Titulo,
        Texto: Texto,
        Data_Comentario: new Date().toISOString().slice(0, 10)
      };
      onAddComment(newComment);
      setTexto('');
    }
  };

  return(
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={Texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Adicione um comentário..."
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          border: '1px solid white',
          padding: '10px',
          borderRadius: '4px',
          width: '100%',
          marginBottom: '10px'
        }}
      />
      <button 
        type="submit"
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Enviar
      </button>
    </form>
  );
}

export default CommentForm;