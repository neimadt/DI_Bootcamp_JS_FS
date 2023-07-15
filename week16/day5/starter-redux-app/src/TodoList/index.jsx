import { connect } from 'react-redux';
import { AddTodoItem } from './AddTodoItem';
import { mapStateToProps } from './mapStateToProps';
import { TodoListItem } from './TodoListItem';


const TodoList = ({ tasks, type }) => {

    return (
        <>
            <AddTodoItem type={type} />
            <ul>
                {
                    tasks.map(({ id, text }) => (
                        <li key={id}>
                            <TodoListItem id={id} type={type}>
                                {text}
                            </TodoListItem>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default connect(mapStateToProps)(TodoList);
