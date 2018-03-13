import * as React from "react";
import { inject, observer } from "mobx-react";

import { CounterStore } from "../../stores";

const s = require("./style.scss");

interface IProps {
	counterStore: CounterStore;
}

@inject("counterStore")
@observer
export default class Home extends React.Component<IProps, {}> {

	private incrementCount = () => {
		this.props.counterStore.incrementCount();
	}

	private decrementCount = () => {
		this.props.counterStore.decrementCount();
	}

	private resetCount = () => {
		this.props.counterStore.resetCount();
	}

	public render() {
		const formatedCount = this.props.counterStore.formatedCount;

		return (
			<div className={s.container}>
				<div className={s.home}>
					<div className={s.counter}>
						<span className={s.count}>{formatedCount}</span>
						<div className={s.rowButton}>
							<button className={s.button} onClick={this.decrementCount}>Decrement</button>
							<button className={s.button} onClick={this.resetCount}>Reset</button>
							<button className={s.button} onClick={this.incrementCount}>Increment</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
