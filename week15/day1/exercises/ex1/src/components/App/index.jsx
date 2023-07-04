import Divider from '../Divider';
import ErrorBoundary from '../ErrorBoundery';

const App = () => {

    return (
        <>
            <ErrorBoundary>
                <Divider />
            </ErrorBoundary>
            <ErrorBoundary>
                <Divider />
            </ErrorBoundary>
        </>
    );
};

export default App;