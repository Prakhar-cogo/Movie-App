import { Link } from "react-router-dom";
function Movieslist({ movies}) {
    return (
        <>
            <div className="container movies">
                <div className=" movie row">
                    {movies && movies.map((movie, index) => (

                        <div className='movieimg'>
                            <img className="img" src={movie.Poster} alt='movie' />
                            
                                <button className="btn btn-outline-success mb-4"  >
                                <Link to={`/moviesdetail/${movie.imdbID}`}> Show Details</Link>
                                </button>        
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}
export default Movieslist;