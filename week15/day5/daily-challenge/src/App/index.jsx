import { Component } from 'react';
import getRandomInteger from '../getRandomInteger';
import superheroes from '../superheroes.json';
import SuperHeroCard from '../components/SuperHeroCard';


console.log(superheroes);

const shuffleSuperHeroes = (reset) => {

    const toPickFrom = [...superheroes];
    const result = [];

    while (toPickFrom.length > 0) {

        const randomIndex = getRandomInteger(0, toPickFrom.length - 1);

        const toBePushed = toPickFrom[randomIndex];

        if (reset) {

            toBePushed.clicked = false;
        }

        result.push(toBePushed);
        toPickFrom.splice(randomIndex, 1);
    }

    return result;
};

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            cards: shuffleSuperHeroes(),
            score: 0,
            highScore: 0
        };

        this.cardClick = this.cardClick.bind(this);
    }

    cardClick(e) {

        const id = parseInt(e.currentTarget.getAttribute('data-id'));

        e.currentTarget.blur();

        const hero = this.state.cards.find(hero => hero.id === id);

        if (hero.clicked) {

            alert('Game OVer');

            this.setState({
                cards: shuffleSuperHeroes(true)
            });

            return;
        }

        hero.clicked = true;

        this.setState({
            cards: shuffleSuperHeroes()
        });
    }

    render() {

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {
                    this.state.cards.map(hero => (
                        <SuperHeroCard key={hero.id} {...hero} cardClick={this.cardClick} />
                    ))
                }
            </div>
        );
    }
};

export default App;
