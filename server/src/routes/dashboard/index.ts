import express from "express";
import { dashboardRepository } from "../../bootstrap/repositories";
import getByIdDashboardController from "../../controllers/dashboard/getByIdDashboardController";
import createDashboardController from "../../controllers/dashboard/createDashboardController";
import DashboardService from "../../services/dashboard/DashboardService";
import getAllDashboardController from "../../controllers/dashboard/getAllDashboardController";

const dashboardRoute = express.Router();
const dashboardService = new DashboardService(dashboardRepository);

//GET
dashboardRoute.get("/", getAllDashboardController(dashboardService));
dashboardRoute.get("/:id", getByIdDashboardController(dashboardService));

//POST
dashboardRoute.post("/", createDashboardController(dashboardService));

//PUT
dashboardRoute.put("/:id", createDashboardController(dashboardService));

//DELETE
dashboardRoute.delete("/:id", createDashboardController(dashboardService));

export default dashboardRoute;
