import { observable, action, computed } from "mobx";
import { RootStore } from "./RootStore";

export class CounterStore {
  protected rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable public count: number = 0;

  @action public incrementCount = () => {
    this.count++;
  };

  @action public decrementCount = () => {
    this.count--;
  };

  @action public resetCount = () => {
    this.count = 0;
  };

  @computed public get formatedCount() {
    return `Counter: ${this.count}`;
  }
}
