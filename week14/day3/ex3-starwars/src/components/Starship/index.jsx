
const Starship = (props) => {

    const { name, starship_class } = props;

    return (
        <li>
            <div>Name: {name}</div>
            <div>Class: {starship_class}</div>
        </li>
    );
};

export default Starship;