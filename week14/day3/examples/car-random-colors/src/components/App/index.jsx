import Car from '../Car';

const App = () => {

    const carColors = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown"
    ]


    return (
        <div className="box">
            <h1>In the App.js</h1>
            <Car colors={carColors} />
        </div>
    )
}

export default App;