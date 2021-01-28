import express from "express";
import authRoute from "./auth";
import dashboardRoute from "./dashboard";
const apiRoute = express.Router();

apiRoute.use("/auth", authRoute);
apiRoute.use("/dashboard", dashboardRoute);

export default apiRoute;
