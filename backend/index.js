const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");

const PORT = process.env.PORT || 9000;
const app = express();

app.use(morgan("dev")); // logger

//middleware module
app.use(express.json()); // body parser

//ROUTES
app.get("/", (req, res) => {
  res.send("it works : ) sweet");
});

// app.use("/api/users", userRouter); // alle users routes
// app.use("/api/posts", postsRouter); // alle posts routes

app.listen(PORT, () => console.log("Server ready at", PORT));
