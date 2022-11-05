import { reactive, Watcher } from "./core";

const data = reactive({
  msg: 'Hello World',
})

new Watcher(() => {
  (document.getElementById('app') as HTMLElement).innerHTML = `msg is ${data.msg}`
})

setTimeout(() => {
  data.msg = 'asdasd'
}, 2000);
