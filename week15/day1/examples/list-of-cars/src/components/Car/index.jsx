
const getTitle = (filteredCars, selectedBrand) => {

    if (filteredCars.length > 1) {

        return `Here are all the ${selectedBrand} cars available in the shop`;
    }
    else if (filteredCars.length === 1) {

        return `Here is the only ${selectedBrand} car available in the shop`;
    }

    return `No ${selectedBrand} car currently available in the shop`;
};


const Car = (props) => {

    const { filteredCars, selectedBrand } = props;

    return (
        <div>
            {/* the function is called here */}
            <h3>{getTitle(filteredCars, selectedBrand)}</h3>
            {
                filteredCars.map(item => (
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