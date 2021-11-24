import React from 'react'; 
import ReactDOM from 'react-dom'; 


class Text extends React.Component{ 
    constructor(){
        super()
        this.state = {
            text: 'Welcome students'
        }
       }

       changeText() {
        this.setState({
            text:'This is Class 2 of React'
        }) 
    }
	render(){ 
		return( 

				<div> 
                 <h1>{this.state.text}</h1>  
                 <button onClick={() => this.changeText()}>Next</button> 
				</div> 
			); 
	} 
} 

export default Text