import { Component } from 'react';

class Actor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      image: ''
    };
  }

  onSubmit(e) {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newState = Object.fromEntries(formData);

    this.setState(newState);
  }

  render() {

    return (
      <>
        <h1>Actor</h1>
        <h2>{this.state.fname} {this.state.lname}</h2>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input name="fname" placeholder='First Name' />
          <br />
          <input name="lname" placeholder='Last Name' />
          <br />
          <input name="image" placeholder='Actor photo url' />
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form>
        {
          this.state.image ?
            <img src={this.state.image} />
            :
            null
        }
      </>
    );
  }
}

export default Actor;
