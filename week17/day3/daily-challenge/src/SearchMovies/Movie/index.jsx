import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const _ = ({ movie }) => {

    return (
        <div className="bg-gray-800 rounded-xl p-3 flex flex-col">

            <img className="w-full h-auto text-white" src={movie.Poster} alt={movie.Title} />
            <div className="flex-1 flex flex-col justify-end text-white text-center pt-2">
                {movie.Title} - {movie.Year}

                <Link
                    to={`/movie/${movie.imdbID}`}
                    className="bg-blue-700 px-3 py-2 rounded-md mt-2 transition-colors duration-200 ease-in-out hover:bg-blue-800">
                    Movie Details
                </Link>
            </div>
        </div>
    );
};

export const Movie = connect()(_);
