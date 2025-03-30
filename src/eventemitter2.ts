import EventEmitter2 from "eventemitter2";
import { pause } from "./util/pause";
require("console-stamp")(console, {
  format: ":date(MM:ss.l)",
});
console.time("test");

class MyEventEmitter extends EventEmitter2 {}

const eventEmitter2 = new MyEventEmitter();

eventEmitter2.on("test1", async () => {
  console.log(">> test1a listener started, pausing for 2 seconds");
  await pause(2);
  console.log(">> test1a listener finished");
  return true;
});

eventEmitter2.on("test1", async () => {
  console.log(">> test1b listener started, pausing for 3 seconds");
  await pause(3);
  console.log(">> test1b listener finished");
  return true;
});

eventEmitter2.on("test2", async () => {
  console.log(">> test2a listener started, pausing for 1 seconds");
  await pause(1);
  console.log(">> test2a listener finished");
  return true;
});

eventEmitter2.on("test2", async () => {
  console.log(">> test2b listener started, pausing for 5 seconds");
  await pause(5);
  console.log(">> test2b listener finished");
  return true;
});

function emitTest() {
  console.log("> parent function invoked");
  eventEmitter2.emit("test1");
  eventEmitter2.emit("test2");
  return ">parent function finished";
}

console.log("init test using eventemitter2");
console.log(emitTest());
console.timeEnd("test");

/*

init test using eventemitter2
> parent function invoked
>> test1 listener started, pausing for 2 seconds
>> test2 listener started, pausing for 1 seconds
>parent function finished
>> test2 listener finished
>> test1 listener finished

*/
