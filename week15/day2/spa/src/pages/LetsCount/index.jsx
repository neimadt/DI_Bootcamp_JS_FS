import { Component, useState } from 'react';


const LetsCount = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment1 = () => {

        setCount1(count1 + 1);
    };

    const increment2 = () => {

        setCount2(count2 + 1);
    };


    return (
        <div>
            <h1>Let's Count</h1>
            <h3>Count: {count1}</h3>
            <button onClick={increment1}>Increment Count</button>
            <br />
            <br />

            <h3>Count: {count2}</h3>
            <button onClick={increment2}>Increment Count</button>
        </div>
    );
}

// class LetsCount extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0
//         };

//         this.increment = this.increment.bind(this);
//     }

//     increment() {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {

//         return (
//             <div>
//                 <h1>Let's Count</h1>
//                 <h3>Count: {this.state.count}</h3>
//                 <button onClick={this.increment}>Increment Count</button>
//             </div>
//         );
//     }
// }

export default LetsCount;
