import Actor from '../Actor';


const actors = [
    {
        fname: 'Actor 1',
        lname: 'LName 1',
        image: 'https://images.typeform.com/images/RAy4YSx5xkAA'
    },
    {
        fname: 'Actor 2',
        lname: 'LName 2',
        image: 'https://images.typeform.com/images/RAy4YSx5xkAA'
    },
    {
        fname: 'Actor 3',
        lname: 'LName 3',
        image: 'https://images.typeform.com/images/RAy4YSx5xkAA'
    }
];

const App = () => {

    return (
        <Actor list={actors} />
    );
};

export default App;
