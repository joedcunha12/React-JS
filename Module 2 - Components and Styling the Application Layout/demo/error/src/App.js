import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        roll_no: null,
        errormessage: ''
      };
	}
	
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
      if (nam === "roll_no") {
        if (val !="" && !Number(val)) {
          err = <strong>Your roll_no must be a number</strong>;
        }
      }
      this.setState({errormessage: err});
      this.setState({[nam]: val});
	}
	
    render() {
      return (
        <form>
        <h1>Hello {this.state.username} </h1>
        <p>Register your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Enter your roll_no:</p>
        <input
          type='text'
          name='roll_no'
          onChange={this.myChangeHandler}
        />
        {this.state.errormessage}
        </form>
      );
    }
  }
  
 export default Form