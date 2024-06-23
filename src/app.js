import express from "express";
import userRoute from "./routes/userRoute.js";

const app = express();

export default app;

app.use(express.json());

app.use("/user", userRoute);
