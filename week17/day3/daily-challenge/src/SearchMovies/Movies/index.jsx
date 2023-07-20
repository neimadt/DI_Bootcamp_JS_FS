import { connect } from 'react-redux';
import { IconLoader } from '../../Navbar/IconLoader';
import { Movie } from '../Movie';


const _ = ({ movies, loading }) => {

    if (loading) {

        return (
            <div className="flex justify-center pt-10">
                <IconLoader className="h-16 w-auto text-slate-700 animate-spin" />
            </div>
        );
    }
    else if (movies.length === 0) {

        return (
            <div className="flex justify-center pt-10">
                <h4 className="text-gray-500 text-2xl text-center">
                    No movies...
                </h4>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-4">
            {
                movies.map(movie => (<Movie key={movie.imdbID} movie={movie} />))
            }
        </div>
    );
};

const mapStateToProps = ({ movies, loading }) => {

    return {
        movies,
        loading
    };
}

export const Movies = connect(mapStateToProps)(_);
