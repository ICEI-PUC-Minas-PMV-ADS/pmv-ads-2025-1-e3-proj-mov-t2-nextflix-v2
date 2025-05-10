// frontend/src/pages/MovieDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';


function MovieDetail() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const mockComments = [
      { ID_Comentario: 1, ID_Usuario: 'user1', ID_Titulo: id, Texto: "Ótimo filme!", Data_Comentario: "2024-05-10" },
      { ID_Comentario: 2, ID_Usuario: 'user2', ID_Titulo: id, Texto: "Recomendo muito!", Data_Comentario: "2024-05-09" }
    ];
    setComments(mockComments);
  }, [id]);

  const handleAddComment = (newComment) => {
    const comment = {
      ...newComment,
      ID_Comentario: Date.now().toString()
    };
    setComments([...comments, comment]);
  };

  return (
    <div className="movie-detail" style={{ 
      color: 'white',  // Isso fará todo o texto ficar branco
      padding: '20px'
    }}>
      {/* Container para a imagem e informações do filme */}
      <div className="movie-info" style={{ 
        display: 'flex', 
        gap: '20px',
        marginBottom: '20px' 
      }}>
        {/* Imagem do filme */}
        <img 
          src="/mickey_antigo.jpg"
          alt="Mickey Antigo"
          style={{
            width: '300px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        />
        
        {/* Informações do filme */}
        <div className="movie-text" style={{ flex: 1 }}>
          <h2 style={{ 
            fontSize: '24px',
            marginBottom: '16px',
            color: 'white'  // Garantindo que o título também fique branco
          }}>
            Mickey Mouse - Filme Antigo
          </h2>
          <p style={{ 
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'white'  // Garantindo que o parágrafo fique branco
          }}>
            Este é um clássico filme do Mickey Mouse, produzido nos primórdios da 
            animação. Uma verdadeira obra-prima que marcou gerações e continua 
            encantando pessoas até hoje.
          </p>
        </div>
      </div>

      {/* Seção de comentários */}
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          marginBottom: '16px',
          color: 'white'  // Garantindo que o título dos comentários fique branco
        }}>
          Comentários
        </h3>
        <CommentList comments={comments} />
        <CommentForm
          onAddComment={handleAddComment}
          ID_Usuario={'user456'}
          ID_Titulo={id}
        />
      </div>
    </div>
  );
}

export default MovieDetail;