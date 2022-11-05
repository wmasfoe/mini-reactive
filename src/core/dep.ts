import type { WatcherType, IDep } from "./types";

export default class Dep implements IDep {
  deps: Set<WatcherType>;
  static target: WatcherType | null = null;

  static targetStack: Array<WatcherType | null> = [];

  // 将上一个 watcher 推到栈里，更新 Dep.target 为传入的 _target 变量
  static pushTarget(_target: WatcherType | null) {
    if (Dep.target) Dep.targetStack.push(Dep.target);
    Dep.target = _target;
  }

  // 取回上一个 watcher 作为 Dep.target，并且栈里要弹出上一个 watcher
  static popTarget() {
    Dep.target = Dep.targetStack.pop() || null;
  }

  constructor() {
    this.deps = new Set();
  }

  depend() {
    if (Dep.target) {
      // 订阅
      this.deps.add(Dep.target);
    }
  }

  notify() {
    // 触发每个订阅的回调
    this.deps.forEach((watcher) => watcher.update());
  }
}
