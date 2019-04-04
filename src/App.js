import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Projects/Project'


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<NavBar/>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/experience" component={Experience}/>
						<Route path="/projects" component={Project}/>
					</Switch>
					{/*<About/>*/}
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
