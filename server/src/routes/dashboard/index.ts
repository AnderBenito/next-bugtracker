import express from "express";
import { dashboardRepository } from "../../bootstrap/repositories";
import getByIdDashboardController from "../../controllers/dashboard/getByIdDashboardController";
import createDashboardController from "../../controllers/dashboard/createDashboardController";
import DashboardService from "../../services/DashboardService";

const dashboardRoute = express.Router();
const dashboardService = new DashboardService(dashboardRepository);

//GET
dashboardRoute.get("/:id", getByIdDashboardController(dashboardService));

//POST
dashboardRoute.post("/", createDashboardController(dashboardService));

export default dashboardRoute;
