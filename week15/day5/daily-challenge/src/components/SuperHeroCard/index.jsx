import './style.css';

const SuperHeroCard = ({ id, name, occupation, image, cardClick }) => {

    return (
        <button
            onClick={cardClick}
            className="superhero-card"
            data-id={id}>
            <img src={image} alt={name} />
            <b>{name}</b>
            <i>{occupation}</i>
        </button>
    );
};

export default SuperHeroCard;