import { connect } from 'react-redux';
import { actions } from '../../store';


const _ = ({ add }) => {

    const onSubmit = e => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const text = formData.get('text');

        const inputElement = e.currentTarget.text;
        inputElement.value = '';

        add(text);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" name="text" />
            </div>
            <br />
            <div>
                <button type="submit">Create Task</button>
            </div>
        </form>
    );
};

const mapDispatchToProps = (dispatch, { type }) => {

    const { [type]: { addTodo } } = actions;

    return {
        add: text => {
            dispatch(addTodo(text))
        }
    };
};

export const AddTodoItem = connect(null, mapDispatchToProps)(_);
