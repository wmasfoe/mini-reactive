import { reactive, Watcher } from "./core";

const data = reactive<{
  msg: string
  user?: string
}>({
  msg: "Hello World",
});

new Watcher(() => {
  (
    document.getElementById("app") as HTMLElement
  ).innerHTML = `msg is ${data.msg}; user is ${data.user || 'default'}`;
});

setTimeout(() => {
  data.msg = "asdasd";
}, 2000);

setTimeout(() => {
  data.user = "Jiaqi";
}, 5000);
