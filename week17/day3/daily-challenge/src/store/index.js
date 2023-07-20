import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { changeSearchTextReducer, setMovieReducer, callApiAsync } from './reducers';


const initialState = {
    text: '',
    movies: [],
    loading: false,
    errorCaught: false,
    movie: null
};

export const callApiThunk = createAsyncThunk('callApiThunk', callApiAsync);

const slice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        changeSearchText: changeSearchTextReducer,
        setMovie: setMovieReducer
    },
    extraReducers: (builder) => {

        builder.addCase(callApiThunk.pending, (state) => {

            state.errorCaught = false;
            state.loading = true;
        });

        builder.addCase(callApiThunk.fulfilled, (state, action) => {

            const movies = action.payload.Search;

            if (movies && movies.length >= 0) {

                state.movies = movies;
            }
            else if (action.payload.imdbID) {

                state.movie = action.payload;
            }

            state.errorCaught = false;
            state.loading = false;
        });

        builder.addCase(callApiThunk.rejected, (state) => {

            state.errorCaught = true;
            state.loading = false;
        });
    },
});


export const { changeSearchText, setMovie } = slice.actions;



export const store = configureStore({
    reducer: slice.reducer,
});
