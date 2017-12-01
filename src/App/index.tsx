import * as React from "react";
import { inject, observer } from "mobx-react";
import { TestStore } from "../stores";

const s = require("./style.scss");
const image = require("../assets/img/react.svg");

interface IProps {
	testStore?: TestStore;
}

@inject("testStore")
@observer
export default class App extends React.Component<IProps, {}> {
	public render() {
		return (
			<div className={s.container}>
				<span className={s.text} onClick={this.props.testStore!.setShowHelloWorld}>
					{
						this.props.testStore!.showHelloWorld ? "Hello, world!" : "Click here!"
					}
				</span>
				<img width="300px" src={image} />
			</div>
		);
	}
}
