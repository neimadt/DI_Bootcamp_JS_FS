import { createTodoSlice } from './createTodoSlice';


const todoSlice = createTodoSlice('work');

export const { actions } = todoSlice;

export default todoSlice.reducer;
