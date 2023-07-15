import { createTodoSlice } from './createTodoSlice';


const todoSlice = createTodoSlice('home');

export const { actions } = todoSlice;

export default todoSlice.reducer;
