import * as stores from "./";
import { syncHistoryWithStore } from "mobx-react-router";
import createBrowerhistory from "history/createBrowserHistory";
import { History } from "history";

export class RootStore {
  public history: History;
  public routerStore: stores.RouterStore;
  public counterStore: stores.CounterStore;

  public constructor() {
    const browerHistory = createBrowerhistory();

    this.routerStore = new stores.RouterStore();
    this.history = syncHistoryWithStore(browerHistory, this.routerStore);

    this.counterStore = new stores.CounterStore(this);

    return {
      routerStore: this.routerStore,
      history: this.history,
      counterStore: this.counterStore
    };
  }
}
