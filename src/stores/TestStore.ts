import { observable, action } from "mobx";

export class TestStore {
	@observable public showHelloWorld: boolean = false;

	@action
	public setShowHelloWorld = () => {
		this.showHelloWorld = !this.showHelloWorld;
	}
}
