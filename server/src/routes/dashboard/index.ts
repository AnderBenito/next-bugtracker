import express from "express";
import getById from "../../controllers/dashboard/getById";
import create from "../../controllers/dashboard/create";
import getAll from "../../controllers/dashboard/getAll";
import update from "../../controllers/dashboard/update";
import deleteDashboard from "../../controllers/dashboard/delete";
import isAuthorizedRead from "../../middleware/dashboard/isAuthorizedRead";
import isAuthorizedWrite from "../../middleware/dashboard/isAuthorizedWrite";
import { dashboardService } from "../../bootstrap/services";
import listDashboardRoute from "../list/listInDashboard";

const dashboardRoute = express.Router();

dashboardRoute.use("/:dashboardId/list", listDashboardRoute);

//GET
dashboardRoute.get("/", getAll(dashboardService));
dashboardRoute.get(
	"/:dashboardId",
	isAuthorizedRead(dashboardService),
	getById(dashboardService)
);

//POST
dashboardRoute.post("/", create(dashboardService));

//PUT
dashboardRoute.put(
	"/:dashboardId",
	isAuthorizedWrite(dashboardService),
	update(dashboardService)
);

//DELETE
dashboardRoute.delete(
	"/:dashboardId",
	isAuthorizedWrite(dashboardService),
	deleteDashboard(dashboardService)
);

export default dashboardRoute;
