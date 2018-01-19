import * as React from "react";
import { computed } from "mobx";
import { inject, observer } from "mobx-react";

import { CounterStore } from "../../stores";

const s = require("./style.scss");

interface IProps {
	counterStore: CounterStore;
}

@inject("counterStore")
@observer
export default class About extends React.Component<IProps, {}> {
	@computed private get count() {
		return "Number: " + this.props.counterStore.count;
	}

	private incrementCount = () => {
		this.props.counterStore.incrementCount();
	}

	private resetCount = () => {
		this.props.counterStore.resetCount();
	}

	public render() {
		return (
			<div className={s.container}>
				<div className={s.home}>
					<div className={s.counter}>
						<span className={s.count}>{this.count}</span>
						<div className={s.rowButton}>
							<button className={s.button} onClick={this.incrementCount}>Increment</button>
							<button className={s.button} onClick={this.resetCount}>Reset</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
