import express from "express";
import { dashboardRepository } from "../../bootstrap/repositories";
import DashboardService from "../../services/dashboard/DashboardService";
import getByIdDashboard from "../../controllers/dashboard/getByIdDashboard";
import createDashboard from "../../controllers/dashboard/createDashboard";
import getAllDashboard from "../../controllers/dashboard/getAllDashboard";
import updateDashboard from "../../controllers/dashboard/updateDashboard";
import deleteDashboard from "../../controllers/dashboard/deleteDashboard";
import taskDashboardRoute from "./task";

const dashboardRoute = express.Router();
const dashboardService = new DashboardService(dashboardRepository);

dashboardRoute.use("/:dashboardId/task", taskDashboardRoute);

//GET
dashboardRoute.get("/", getAllDashboard(dashboardService));
dashboardRoute.get("/:id", getByIdDashboard(dashboardService));

//POST
dashboardRoute.post("/", createDashboard(dashboardService));

//PUT
dashboardRoute.put("/:id", updateDashboard(dashboardService));

//DELETE
dashboardRoute.delete("/:id", deleteDashboard(dashboardService));

export default dashboardRoute;
