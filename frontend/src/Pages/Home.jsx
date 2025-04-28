import React from "react";

const colors = {
  background: "#1B1F3B",
  card: "#FFFFFF",
  category: "#333333",
  categoryText: "#FFFFFF",
  categoryBorder: "#333333",
  highlight: "#E50914",
  text: "#FFFFFF",
  title: "#FFFFFF",
  subtitle: "#FFFFFF",
  star: "#E50914",
};

const categories = ["Ação", "Comédia", "Drama"];
const recommended = [
  { title: "Filme 1", rating: 4 },
  { title: "Filme 2", rating: 5 },
];

function StarRating({ rating }) {
  return (
    <div style={{ color: colors.star }}>
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? "★" : "☆"
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.background,
        padding: 32,
        fontFamily: "sans-serif",
        color: colors.text,
      }}
    >
      <h1 style={{ color: colors.title }}>Home</h1>

      {/* Search Bar */}
      <div style={{ margin: "32px 0" }}>
        <input
          type="text"
          placeholder="Buscar filmes e séries..."
          style={{
            width: "100%",
            padding: 20,
            borderRadius: 16,
            border: "none",
            fontSize: 18,
            outline: "none",
            background: colors.card,
            color: colors.category,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        />
      </div>

      {/* Categories */}
      <div>
        <h2 style={{ fontSize: 18, marginBottom: 16, color: colors.subtitle }}>Categorias</h2>
        <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
          {categories.map((cat) => (
            <div
              key={cat}
              style={{
                border: `2px solid ${colors.categoryBorder}`,
                borderRadius: 16,
                padding: "24px 32px",
                minWidth: 120,
                textAlign: "center",
                color: colors.categoryText,
                fontSize: 16,
                background: colors.category,
                cursor: "pointer",
                fontWeight: 500,
                transition: "background 0.2s, color 0.2s, border 0.2s",
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = colors.highlight;
                e.currentTarget.style.color = colors.card;
                e.currentTarget.style.border = `2px solid ${colors.highlight}`;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = colors.category;
                e.currentTarget.style.color = colors.categoryText;
                e.currentTarget.style.border = `2px solid ${colors.categoryBorder}`;
              }}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Recommended */}
      <div>
        <h2 style={{ fontSize: 18, marginBottom: 16, color: colors.subtitle }}>Recomendados para você</h2>
        <div style={{ display: "flex", gap: 32 }}>
          {recommended.map((movie) => (
            <div
              key={movie.title}
              style={{
                border: "none",
                borderRadius: 16,
                width: 220,
                height: 320,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: 24,
                background: colors.card,
                color: colors.category,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ marginBottom: 8, fontWeight: 500 }}>{movie.title}</div>
              <StarRating rating={movie.rating} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}