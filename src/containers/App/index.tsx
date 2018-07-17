import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { hot } from "react-hot-loader";

import { Header } from "../../components/Header";
import { Home } from "../Home";
import { About } from "../About";

import "normalize.css";
import { TypographyStyle, GoogleFont } from "react-typography";
import { typography } from "../../utils/typography";

class App extends React.Component {
	public render() {
		return (
			<React.Fragment>
				<TypographyStyle typography={typography} />
				<GoogleFont typography={typography} />
				<Header />
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/home" />} />
					<Route path="/home" component={Home} />
					<Route path="/about" component={About} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default hot(module)(App);
