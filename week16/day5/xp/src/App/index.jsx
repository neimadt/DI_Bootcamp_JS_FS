import '../css/tailwind.css';
import '../css/app.css';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Snapshots } from '../Snapshots';



export const App = () => {

    return (
        <Provider store={store}>
            <h1 className="text-gray-700 text-5xl font-bold text-center mt-14">Snapshot</h1>
            <Snapshots />
        </Provider>
    );
};
