import './style.css';
import { connect } from 'react-redux';
import { actions } from '../../store';


const _ = ({ id, children, remove }) => {

    const onClick = () => {

        remove(id);
    };

    return (
        <button onClick={onClick} className="todo-list-item">
            {children}
        </button>
    );
};

const mapDispatchToProps = (dispatch, { type }) => {

    const { [type]: { deleteTodo } } = actions;

    return {
        remove: id => {
            dispatch(deleteTodo(id))
        }
    };
};

export const TodoListItem = connect(null, mapDispatchToProps)(_);
