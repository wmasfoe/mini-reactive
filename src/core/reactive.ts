import type { ObjReactiveType } from "./types";
import { Dep } from "./index";

export default function reactive<T extends ObjReactiveType>(OriginData: T) {
  const dep = new Dep();

  // 用户传入 data 的类型
  type DataType = typeof OriginData;
  return new Proxy<DataType>(OriginData, {
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
