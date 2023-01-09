const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("get-products", (data) => {
    axios.get("http://localhost:8090/product/all").then((res) => {
      let data = res.data;
      for (let i = 0; i < data.length; i++) {
        let image = fs.readFileSync(data[i].pictures[0].url);
        data[i].pictures = [image];
      }
      console.log(res.data);
      socket.emit("receive-products", res.data);
    });
  });

  socket.on("get-categories", (data) => {
    axios.get("http://localhost:8090/category/all").then(async (res) => {
      let data = res.data;
      for (let i = 0; i < data.length; i++) {
        let image = fs.readFileSync(data[i].pictureUrl);
        data[i].picture = image;
      }
      console.log(data);
      socket.emit("receive-categories", data);
    });
  });

  socket.on("get-storeConfig", (data) => {
    axios.get("http://localhost:8090/store/all").then((res) => {
      console.log(res.data);
      socket.emit("receive-storeConfig", res.data);
    });
  });

  socket.on("add-product", async (data) => {
    //data.pictures[0].url is variable with an image buffer, save it to a file
    //genetal a random and unique name for the file
    const fileName = `${Math.random()
      .toString(36)
      .substring(2, 15)}${Math.random().toString(36).substring(2, 15)}.jpg`;

    fs.writeFileSync(`./public/images/${fileName}`, data.pictures[0].url);

    var modData = data;
    modData.pictures[0].url = `./public/images/${fileName}`;
    modData.sold = 0;
    //send data to localhost:8090/product/add
    axios.post("http://localhost:8090/product/add", modData).then((res) => {
      console.log(res.data);
    });
    console.log(data);
    //send the data to
  });
  socket.on("add-category", async (data) => {
    //data.pictures[0].url is variable with an image buffer, save it to a file
    //genetal a random and unique name for the file
    const fileName = `${Math.random()
      .toString(36)
      .substring(2, 15)}${Math.random().toString(36).substring(2, 15)}.jpg`;

    fs.writeFileSync(`./public/images/${fileName}`, data.pictureUrl);
    var modData = data;
    modData.pictureUrl = `./public/images/${fileName}`;
    console.log(data);
    //send the data to http://localhost:8090/category/add
    axios.post("http://localhost:8090/category/add", modData).then((res) => {
      console.log(res.data);
    });
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
