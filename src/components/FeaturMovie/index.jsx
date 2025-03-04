import React, { useEffect, useState } from 'react';
import PaginaIndicator from './PaginaIndicator';
import Movie from './Movie';

const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState(null);
  const [fade, setFade] = useState(false); // Trạng thái hiệu ứng fade-in/fade-out

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDNjMjQ5MDYwNTFjNjQ0NjcyZjM1ZGFlZWE0MDNlOSIsIm5iZiI6MTczOTg2ODQyNi42NjYsInN1YiI6IjY3YjQ0OTBhZDQ0ZGNhZmUwZjlmOWU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JpX8plHRFe0myt-L4fNc--Nqj05UCMtl0KOTt6R6DGY`
      }
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4); // Lấy 4 phim đầu
      setMovies(popularMovies);
      if (popularMovies.length > 0) {
        setActiveMovieId(popularMovies[0].id); // Đặt phim đầu tiên là active
      }
    });
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setFade(true); // Bắt đầu hiệu ứng fade-out

      setTimeout(() => {
        setActiveMovieId((prevId) => {
          const currentIndex = movies.findIndex(movie => movie.id === prevId);
          const nextIndex = (currentIndex + 1) % movies.length; // Chuyển sang phim tiếp theo
          return movies[nextIndex].id;
        });
        setFade(false); // Kích hoạt hiệu ứng fade-in sau khi đổi phim
      }, 500); // Độ trễ để thực hiện fade-out

    }, 5000); // Chuyển mỗi 5 giây

    return () => clearInterval(interval); // Cleanup khi unmount
  }, [movies]);

  const activeMovie = movies.find(movie => movie.id === activeMovieId);

  return (
    <div className="relative">
      {activeMovie ? (
        <div className={`transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          <Movie key={activeMovie.id} data={activeMovie} />
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <PaginaIndicator movies={movies} activeMovieId={activeMovieId} setActiveMovieId={setActiveMovieId} />
    </div>
  );
};

export default FeatureMovie;
