import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { callApiThunk } from '../store';
import { IconLoader } from '../Navbar/IconLoader';


const _ = ({ movie, loading, callApi }) => {

    const { imdbID } = useParams();


    useEffect(() => {
        callApi(imdbID);
    }, []);


    if (loading || !movie) {

        return (
            <div className="flex justify-center pt-10">
                <IconLoader className="h-16 w-auto text-slate-700 animate-spin" />
            </div>
        );
    }

    return (
        <div className="flex my-6">
            <div className="w-1/2 min-w-[50%] p-5 rounded-md border border-gray-300">
                <img className="w-full h-auto" src={movie.Poster} />
            </div>
            <div className="flex-1 pl-3">
                <h2 className="font-bold text-3xl">{movie.Title}</h2>
                <div className="rounded-md border border-gray-300 mt-5">
                    <div className="border-b border-b-gray-300 py-3 flex px-3">
                        <b>Genre</b>
                        <span className="ml-3">
                            {movie.Genre}
                        </span>
                    </div>
                    <div className="border-b border-b-gray-300 py-3 flex px-3">
                        <b>Released</b>
                        <span className="ml-3">
                            {movie.Released}
                        </span>
                    </div>
                    <div className="border-b border-b-gray-300 py-3 flex px-3">
                        <b>Rated</b>
                        <span className="ml-3">
                            {movie.Rated}
                        </span>
                    </div>
                    <div className="border-b border-b-gray-300 py-3 flex px-3">
                        <b>IMDB Rating</b>
                        <span className="ml-3">
                            {movie.imdbRating}
                        </span>
                    </div>
                    <div className="border-b border-b-gray-300 py-3 flex px-3">
                        <b>Director</b>
                        <span className="ml-3">
                            {movie.Director}
                        </span>
                    </div>
                    <div className="border-b border-b-gray-300 py-3 flex px-3">
                        <b>Writer</b>
                        <span className="ml-3">
                            {movie.Writer}
                        </span>
                    </div>
                    <div className="border-b-0 py-3 flex px-3">
                        <b>Actors</b>
                        <span className="ml-3">
                            {movie.Actors}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ movie, loading }) => {

    return {
        loading,
        movie
    };
};


const mapDispatchToProps = dispatch => {

    return {
        callApi: id => {

            dispatch(callApiThunk(id));
        }
    };
};

export const MovieDetails = connect(mapStateToProps, mapDispatchToProps)(_);
