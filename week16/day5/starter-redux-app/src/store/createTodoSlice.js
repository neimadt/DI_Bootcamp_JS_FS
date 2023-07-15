import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    tasks: [],
};

let idCounter = 0;
const generateNewTodoItemId = () => {

    return `${Date.now()}${--idCounter}`;
};

export const createTodoSlice = name => {

    return createSlice({
        name,
        initialState,
        reducers: {
            addTodo: (state, action) => {

                state.tasks.push({ id: generateNewTodoItemId(), text: action.payload });
            },
            deleteTodo: (state, action) => {

                state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            },
        },
    });
};

// export const { addTodo, deleteTodo } = todoSlice.actions;

// export default todoSlice.reducer;