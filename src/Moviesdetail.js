import Navbar from "./navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Moviesdetail() {
    const params = useParams()
    const key = "5167a302";
    const [movie, setMovie] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [id, setId] = useState(params.id);
    useEffect(() => {
        const getMovie = async () => {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${key}&i=${id}&plot=full`);
            const result = await response.json();
            if (response.ok) {
                setMovie(result);
            } else {
                setErrorMessage(result.message);
            }
        }
        getMovie();
    }, [])

    return (
        <>
            <Navbar />
            {movie &&
              <div class="detail">
                <div className="moviedetail container">
                    <div class="card mb-3">
                        <img class="card-img-top" src={movie.Poster} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Title :&nbsp;{movie.Title}</h5>
                            <h5 class="card-title">Genre :&nbsp;{movie.Type}</h5>
                            <h5 class="card-title">Year : &nbsp;{movie.Year}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                </div>
            }
        </>
    )
}
export default Moviesdetail;