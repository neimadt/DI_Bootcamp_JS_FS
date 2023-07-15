import { createSlice, configureStore } from '@reduxjs/toolkit';
import { dayForward as dayForwardReducer, dayBackward as dayBackwardReducer } from '../reducers';


const initialState = { weekday: 'Monday' };

const slice = createSlice({
    name: 'WeekDays',
    initialState,
    reducers: {
        dayForward: dayForwardReducer,
        dayBackward: dayBackwardReducer
    }
});

const store = configureStore({
    reducer: slice.reducer
});

const { dayBackward, dayForward } = slice.actions;


export { dayBackward, dayForward };
export default store;