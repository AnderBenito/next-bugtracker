import express from "express";
import getByIdDashboard from "../../controllers/dashboard/getByIdDashboard";
import createDashboard from "../../controllers/dashboard/createDashboard";
import getAllDashboard from "../../controllers/dashboard/getAllDashboard";
import updateDashboard from "../../controllers/dashboard/updateDashboard";
import deleteDashboard from "../../controllers/dashboard/deleteDashboard";
import taskDashboardRoute from "./task";
import isAuthorizedRead from "../../middleware/dashboard/isAuthorizedRead";
import isAuthorizedWrite from "../../middleware/dashboard/isAuthorizedWrite";
import { dashboardService } from "../../bootstrap/services";

const dashboardRoute = express.Router();

dashboardRoute.use("/:dashboardId/task", taskDashboardRoute);

//GET
dashboardRoute.get("/", getAllDashboard(dashboardService));
dashboardRoute.get(
	"/:dashboardId",
	isAuthorizedRead(dashboardService),
	getByIdDashboard(dashboardService)
);

//POST
dashboardRoute.post("/", createDashboard(dashboardService));

//PUT
dashboardRoute.put(
	"/:dashboardId",
	isAuthorizedWrite(dashboardService),
	updateDashboard(dashboardService)
);

//DELETE
dashboardRoute.delete(
	"/:dashboardId",
	isAuthorizedWrite(dashboardService),
	deleteDashboard(dashboardService)
);

export default dashboardRoute;
