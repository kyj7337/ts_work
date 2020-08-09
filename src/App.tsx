import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main, Contact } from './View/index';
import Layout from './Layout';
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Layout>
					<Route exact path="/" component={Main} />
					<Route path="/contact" component={Contact} />
				</Layout>
			</Switch>
		</Router>
	);
}

export default App;
