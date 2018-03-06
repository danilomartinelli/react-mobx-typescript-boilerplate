import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { hot } from "react-hot-loader";

import Header from "../../components/Header";
import Home from "../Home";
import About from "../About";

require("./style.scss");

const App = () =>
	<React.Fragment>
		<Header />
		<Switch>
			<Route exact path="/" render={() => <Redirect to="/home" />} />
			<Route path="/home" component={Home} />
			<Route path="/about" component={About} />
		</Switch>
	</React.Fragment>;

export default hot(module)(App);
