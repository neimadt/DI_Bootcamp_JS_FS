import { connect } from 'react-redux';
import { IconSearch } from '../Navbar/IconSearch';
import { changeSearchText, callApiThunk } from '../store';
import { Movies } from './Movies';


const _ = ({ changeText, callApi }) => {

    const onSubmit = e => {
        e.preventDefault();

        callApi();
    };

    const onTextChange = e => {
        changeText(e.target.value);
    };

    return (
        <>
            <form className="flex flex-col bg-gray-400 px-8 py-5 mt-6 rounded-md" onSubmit={onSubmit}>
                <div className="flex items-center text-2xl mb-2">
                    <IconSearch className="h-8 mr-2" />   Search for a movie ,TV series ..
                </div>
                <div className="border border-gray-50 bg-white rounded-md px-2 h-9 focus-within:border-blue-500">
                    <input onChange={onTextChange} className="bg-transparent outline-none border-none w-full h-full" />
                </div>
                <button type="submit" className="bg-red-400 px-8 py-2 w-fit mt-4 rounded-full transition-colors duration-200 ease-in-out hover:bg-red-500">Search</button>
            </form>
            <Movies />
        </>
    );
};


const mapDispatchToProps = (dispatch) => {

    return {
        changeText: text => {
            dispatch(changeSearchText(text))
        },
        callApi: () => {

            // const { text } = store.getState();

            dispatch(callApiThunk());
        }
    };
};

export const SearchMovies = connect(null, mapDispatchToProps)(_);
