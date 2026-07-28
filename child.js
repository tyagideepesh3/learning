import { parentPort, workerData } from "worker_threads";

console.log("child process, argv, ", process.argv);
console.log("child process, envs, ", process.env);
// console.log("child process, name, ", threadName);
console.log("child process, worker_data, ", workerData);

parentPort.on("message", (msg) => {
  //   console.log(msg);
  const count = complexCount();
  msg.port.postMessage(count);
});

function complexCount() {
  let count = 0;
  for (let i = 0; i < 300000000; i++) {
    count++;
  }
  //   parentPort.postMessage(count);
  return count;
}
