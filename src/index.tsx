import * as React from "react";
import * as ReactDOM from "react-dom";
import { useStrict } from "mobx";
import { Provider } from "mobx-react";
import { Router } from "react-router";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import createBrowserHistory from "history/createBrowserHistory";

import { TestStore } from "./stores";

import App from "./App";

const routerStore = new RouterStore();
const testStore = new TestStore();
const rootStore = {
	routerStore,
	testStore,
};

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routerStore);

useStrict(true);
if (process.env.NODE_ENV !== "production") {
	console.log("Staging Mode");
}

ReactDOM.render(
	<Provider {...rootStore}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById("app"),
);
