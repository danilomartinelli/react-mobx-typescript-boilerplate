import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../../components/Header";
import Home from "../Home";
import About from "../About";

require("./style.scss");

export default class App extends React.Component<{}, {}> {
	public render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/home" />} />
					<Route path="/home" component={Home} />
					<Route path="/about" component={About} />
				</Switch>
			</div>
		);
	}
}
