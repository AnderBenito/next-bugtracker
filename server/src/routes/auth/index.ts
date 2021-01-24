import express from "express";
import googleRoute from "./google";

const authRoute = express.Router();

authRoute.use("/google", googleRoute);

export default authRoute;
