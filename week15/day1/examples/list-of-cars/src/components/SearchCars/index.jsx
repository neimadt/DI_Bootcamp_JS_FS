
const SearchCar = (props) => {

    const { listCars, handleChange } = props;

    const setOfBrands = new Set(listCars.map(item => (item.brand)));
    const listWithoutDup = [...setOfBrands];

    console.log({ setOfBrands })

    return (
        <select onChange={handleChange}>
            <option value="...">...</option>
            {
                listWithoutDup.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                ))
            }
        </select>
    )
}

export default SearchCar;