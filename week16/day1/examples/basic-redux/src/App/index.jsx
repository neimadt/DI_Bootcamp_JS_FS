import React from 'react';
import Lesson from '../Lesson';


class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Lesson />
                {/* <Lesson subject={store.getState().subject} /> */}
                <button>Change Subject to React</button>
                <button>Change Subject to Javascript</button>
            </div>
        );
    }
}

export default App;