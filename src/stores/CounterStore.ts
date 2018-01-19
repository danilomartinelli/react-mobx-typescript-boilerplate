import { observable, action } from "mobx";

export class CounterStore {
	@observable public count: number = 0;

	@action public incrementCount = () => {
		this.count++;
	}

	@action public resetCount = () => {
		this.count = 0;
	}

}
