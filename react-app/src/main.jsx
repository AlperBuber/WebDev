import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
    </>
  );
}

function Header() {
  return (
    <>
      <h1>MovieApp</h1>
      <Navbar />
      <MovieList />
    </>
  );
}

function Navbar() {
  return <h2>All Nav Links will be here</h2>;
}

function MovieList() {
  const movieList = [
    {
      id: 1,
      image: "1.jpg",
      title: "Kaptan Amerika",
      description: "Çok güzel bir film",
      isActive: true,
      isNew: true,
    },
    {
      id: 2,
      image: "2.jpg",
      title: "Araba Hırsızları",
      description: "Çok güzel bir film",
      isActive: true,
      isNew: false,
    },
    {
      id: 3,
      image: "3.jpg",
      title: "Codes Of War",
      description: "Çok güzel bir film",
      isActive: true,
      isNew: true,
    },
    {
      id: 4,
      image: "4.jpg",
      title: "Moana 2",
      description: "Çok güzel bir film",
      isActive: false,
    },
    {
      id: 5,
      image: "5.jpg",
      title: "Counterstrike",
      description: "Çok güzel bir film",
      isActive: false,
      isNew: false,
    },
    {
      id: 6,
      image: "6.jpg",
      title: "Ölümcül Uçuş",
      description: "Çok güzel bir film",
      isActive: true,
      isNew: true,
    },
  ];
  return (
    <>
      <h3 className="title">There will be the list of movie</h3>

      {movieList.filter((m) => m.isActive).length != 0 ? (
        <div className="movie-list">
          {movieList.map((movie) => (
            <Movie key={movie.id} movieObj={movie} />
          ))}
        </div>
      ) : (
        <div>Film Bulunamadı</div>
      )}
    </>
  );
}

function Movie({ movieObj }) {
  return (
    movieObj.isActive && (
      <div className="movie">
        <img src={"/img/" + movieObj.image} alt="" />
        <h4 className={`f30 red ${movieObj.isNew ? "new" : ""}`}>
          {movieObj.title}
        </h4>
        <p>{movieObj.description}</p>
      </div>
    )
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
