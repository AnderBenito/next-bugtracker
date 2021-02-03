import express from "express";
import isAuthenticated from "../middleware/isAuthenticated";
import authRoute from "./auth";
import dashboardRoute from "./dashboard";
import listRoute from "./list";
import taskRoute from "./task";

const apiRoute = express.Router();

apiRoute.use("/auth", authRoute);
apiRoute.use("/dashboard", isAuthenticated, dashboardRoute);
apiRoute.use("/list", isAuthenticated, listRoute);
apiRoute.use("/task", isAuthenticated, taskRoute);

export default apiRoute;
