import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About'



class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<NavBar/>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
					</Switch>
					{/*<About/>*/}
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
