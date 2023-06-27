// import expressnya
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;

// cara penggunaan folder routes
// 1. import file routesnya
const userRoutes = require("./routes/users.js");
const productRoutes = require("./routes/product.js");

const app = express();

// patern routing
// app.method(path,handler);
// app.use("/", (req, res, next) => {
//   res.send("Hello World");
// });

// Cara penggunaan midleware
const middlewareRequestLog = require("./middleware/reqlog");
app.use(middlewareRequestLog);
app.use(express.json());

// 2. disini kita menggunakan method use
// disebut juga grouping route users
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// server listen to port
app.listen(PORT, () => {
  console.log(`Server is running di port ${PORT}`);
});
