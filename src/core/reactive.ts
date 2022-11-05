import type { ObjReactiveType } from "./types";
import { Dep } from "./index";

export default function reactive(OriginData: ObjReactiveType) {
  const dep = new Dep();
  return new Proxy<ObjReactiveType>(OriginData, {
    get(target, prop) {
      // 收集依赖
      dep.depend();
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      Reflect.set(target, prop, value);
      // 触发订阅
      dep.notify();
      return value;
    },
  });
}
