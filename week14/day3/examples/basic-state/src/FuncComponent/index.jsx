
const App = (props) => {

    const sayHi = () => {

        alert(`${props.label} ${props.message}`);
    }

    return (
        <div>
            <h2>Hello from Function {props.message}</h2>
            <button onClick={sayHi}>Say Hi</button>
        </div>
    );
};

export default App;
