import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home';
import WithOutHooksComp from './withoutHooks';
import HooksComp from './withHooks';
import ContextComponent from './contextComponent'
import WeatherHooks from './weatherWithhooks'

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <header>
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span> 
                            </button>
                            <p class="navbar-brand">Edureka</p>
                            </div>
                            <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/withouthooks">WithOutHooks</Link></li>
                                <li><Link to="/weather">WeatherHooks</Link></li> 
                                <li><Link to="/hooks">Hooks</Link></li> 
                                <li><Link to="/context">Context</Link></li> 
                            </ul>
                            </div>
                        </div>
                    </nav>
                    </header>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/withouthooks" component={WithOutHooksComp}></Route>
                    <Route path="/hooks" component={HooksComp}></Route>
                    <Route path="/context" component={ContextComponent}></Route>
                    <Route path="/weather" component={WeatherHooks}></Route>
                    
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;

