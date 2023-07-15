import { configureStore } from '@reduxjs/toolkit';
import workTodoReducer, { actions as workActions } from './workTodoSlice';
import homeTodoReducer, { actions as homeActions } from './homeTodoSlice';


const store = configureStore({
    reducer: {
        home: homeTodoReducer,
        work: workTodoReducer
    },
});

export const actions = {
    home: homeActions,
    work: workActions
};

export default store;
