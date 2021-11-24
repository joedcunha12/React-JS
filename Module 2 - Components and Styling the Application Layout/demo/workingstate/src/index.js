import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './components/App';

class ReactComponent extends React.Component{ 
	render(){ 
		return( 

				<div> 
				<App/>
				</div> 
			); 
	} 
} 

ReactDOM.render(<ReactComponent/>, document.getElementById("root")); 




