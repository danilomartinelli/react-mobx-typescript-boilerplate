import { observable, action, computed } from "mobx";

export class CounterStore {
	@observable public count: number = 0;

	@action public incrementCount = () => {
		this.count++;
	}

	@action public decrementCount = () => {
		this.count--;
	}

	@action public resetCount = () => {
		this.count = 0;
	}

	@computed public get formatedCount() {
		return `Counter: ${this.count}`;
	}

}
