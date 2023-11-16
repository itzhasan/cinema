import "./List.css"
import { useState, useEffect } from 'react';

const List = () => {
  const [listCard, setlistCard] = useState([])
  useEffect(() => {
    const cards = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=7f53c139b768b54cb59afc0bdfcbbfb4")
        const datalist = await response.json();
        setlistCard(datalist.results);
      }
      catch (error) {
        console.log(error);
      }
    }
    cards();

  }, [])


  return (
    <div>
      <div className="container">
        <div className="movie-card">


          {listCard.map((movie) => (
            <div className="inside" key={movie.id} >
              <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
              <div className="caption">
                <h3>{movie.title || movie.name}</h3>
                <p>{movie.vote_average} tmdb</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  )

}

export default List
