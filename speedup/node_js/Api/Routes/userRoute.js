import express from "express";
import colors from "colors";
import connectDb from "./db.js";
import userRoute from "./Routes/userRoute.js";

const app = express();

connectDb();
app.use(express.json());
// it parses the json string object into json object

app.use("/api/user", userRoute);
app.get("/", (req, res) => {
  res.send("Welcome to APi");
});

app.listen(4321, () => {
  console.log("Server is Running on Port 4321".bgRed.white);
});
