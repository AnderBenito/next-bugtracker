import express from "express";
import isAuthenticated from "../middleware/isAuthenticated";
import authRoute from "./auth";
import dashboardRoute from "./dashboard";
const apiRoute = express.Router();

apiRoute.use("/auth", authRoute);
apiRoute.use("/dashboard", isAuthenticated, dashboardRoute);

export default apiRoute;
