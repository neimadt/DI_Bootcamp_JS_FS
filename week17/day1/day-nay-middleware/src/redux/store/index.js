import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import {
    dayForward as dayForwardReducer,
    dayBackward as dayBackwardReducer,
    moveDayWithJokeAsync as moveDayWithJokeAsyncReducer
} from '../reducers';


const initialState = { weekday: 'Monday', jokeOfTheDay: '', loading: false, errorCaught: false };


export const moveDayWithJokeThunk = createAsyncThunk('moveDayWithJokeThunk', moveDayWithJokeAsyncReducer);

const slice = createSlice({
    name: 'WeekDays',
    initialState,
    reducers: {
        dayForward: dayForwardReducer,
        dayBackward: dayBackwardReducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed

        builder.addCase(moveDayWithJokeThunk.pending, (state) => {

            state.jokeOfTheDay = '';
            state.errorCaught = false;
            state.loading = true;
        });

        builder.addCase(moveDayWithJokeThunk.fulfilled, (state, action) => {
            // Add user to the state array
            // state.entities.push(action.payload)
            state.weekday = action.payload.chosenDay;
            state.jokeOfTheDay = action.payload.jokeOfTheDay;

            state.errorCaught = false;
            state.loading = false;
        });

        builder.addCase(moveDayWithJokeThunk.rejected, (state) => {

            state.errorCaught = true;
            state.loading = false;
        });
    },
});


export const { dayBackward, dayForward } = slice.actions;



const store = configureStore({
    reducer: slice.reducer,
});

store.subscribe(() => {

    console.log('NEW STATE', store.getState());
})

export default store;