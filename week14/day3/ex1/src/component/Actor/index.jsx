import { Component } from 'react';

class Actor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: 'Actor 1',
      lname: 'LName 1',
      image: 'https://images.typeform.com/images/RAy4YSx5xkAA',
      showImg: true
    };
  }

  toggle() {

    this.setState({
      showImg: !this.state.showImg
    });
  }

  render() {

    return (
      <>
        <h1>Actor</h1>
        <div>
          <h4>{this.state.fname}&nbsp;{this.state.lname}</h4>
          {
            this.state.showImg ?
              <img src={this.state.image} />
              :
              null
          }
        </div>
        <button style={{ color: 'white' }} onClick={this.toggle.bind(this)}>Toggle</button>
      </>
    );
  }
}

export default Actor;
