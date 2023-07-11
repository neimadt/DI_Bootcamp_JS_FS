import { createSlice, configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';

const initialState = { subject: 'React' };

const slice = createSlice({
    name: 'Subjects',
    initialState,
    reducers: {
        changeSubject: reducer
    }
});

const store = configureStore({
    reducer: slice.reducer
});


export default store;