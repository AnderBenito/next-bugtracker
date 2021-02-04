import express from "express";
import getById from "../../controllers/dashboard/getById";
import create from "../../controllers/dashboard/create";
import getAll from "../../controllers/dashboard/getAll";
import update from "../../controllers/dashboard/update";
import deleteDashboard from "../../controllers/dashboard/delete";
import { dashboardService } from "../../bootstrap/services";
import listDashboardRoute from "../list/listInDashboard";
import isAuthorized from "../../middleware/dashboard/isAuthorized";

const dashboardRoute = express.Router();

dashboardRoute.use(
	"/:dashboardId/list",
	isAuthorized(dashboardService),
	listDashboardRoute
);

//GET
dashboardRoute.get("/", getAll(dashboardService));
dashboardRoute.get(
	"/:dashboardId",
	isAuthorized(dashboardService),
	getById(dashboardService)
);

//POST
dashboardRoute.post("/", create(dashboardService));

//PUT
dashboardRoute.put(
	"/:dashboardId",
	isAuthorized(dashboardService),
	update(dashboardService)
);

//DELETE
dashboardRoute.delete(
	"/:dashboardId",
	isAuthorized(dashboardService),
	deleteDashboard(dashboardService)
);

export default dashboardRoute;
