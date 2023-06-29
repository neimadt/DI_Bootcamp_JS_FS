
const Car = (props) => {

    const { chosenCars } = props;

    return (
        <div>
            {
                chosenCars.map(item => (
                    <ul key={item.id}>
                        <li>Brand : {item.brand}</li>
                        <li>Name : {item.name}</li>
                        <li>Year of creation : {item.year}</li>
                        <li>Origin : {item.origin}</li>
                    </ul>
                ))
            }
        </div>
    );
};

export default Car;