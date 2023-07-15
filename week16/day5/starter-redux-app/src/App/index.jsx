import { Provider } from "react-redux";
import TodoList from '../TodoList';
import store from '../store';


export const App = () => {

    return (
        <Provider store={store}>
            <>
                <div>
                    <h2>Home Todo List</h2>
                    <TodoList type="home" />
                </div>
                <br />
                <br />
                <div>
                    <h2>Work Todo List</h2>
                    <TodoList type="work" />
                </div>
            </>
        </Provider>
    );
};

export default App;
