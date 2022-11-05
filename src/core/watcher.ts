import type { WatcherType } from "./types";
import { Dep } from "./index";

export default class Watcher implements WatcherType {
  getter: () => any;
  value: undefined;
  constructor(getter: () => void) {
    this.getter = getter;
    this.get();
  }

  get() {
    Dep.pushTarget(this);
    this.value = this.getter();
    Dep.popTarget();
    return this.value;
  }

  update() {
    this.get();
  }
}
