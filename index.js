import express from "express";
import { MessageChannel, Worker } from "worker_threads";

const app = express();

app.get("/", (req, res) => {
  res.send("home health");
});

app.get("/heavy", (req, res) => {
  const { port1, port2 } = new MessageChannel();
  const childWorker = new Worker("./child.js", {
    argv: ["hlw", "process", "argv", "list"],
    name: "child_process",
    env: {
      port: 3000,
      password: "password",
      username: "username",
    },
    workerData: {
      name: "Deep",
      age: 24,
      isMarried: false,
    },
  });
  //   console.log(child_port, parent_port);
  childWorker.postMessage({ port: port2 }, [port2]);
  port1.on("message", (data) => {
    res.send({
      info: "from message channel",
      message: data,
    });
  });
  childWorker.on("message", (data) => {
    console.log(data);
    res.send({
      info: "from parent port in child worker",
      message: data,
    });
  });
  childWorker.on("online", () => {
    console.log("worker is online");
  });
  childWorker.on("exit", (data) => {
    console.log("worker thread exited", data);
  });
  childWorker.on("error", (err) => {
    console.log("worker thread error", err);
  });
});

app.get("/light", (req, res) => {
  res.send({
    message: "success",
  });
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
