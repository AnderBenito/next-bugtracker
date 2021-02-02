import express from "express";
import isAuthorizedRead from "../../middleware/dashboard/isAuthorizedRead";
import createTask from "../../controllers/task/createTask";
import getAllTaskByDashboardId from "../../controllers/task/getAllTaskByDashboardId";
import isAuthorizedWrite from "../../middleware/dashboard/isAuthorizedWrite";
import getTaskById from "../../controllers/task/getTaskById";
import updateTask from "../../controllers/task/updateTask";
import deleteTask from "../../controllers/task/deleteTask";
import { dashboardService, taskService } from "../../bootstrap/services";

const taskDashboardRoute = express.Router({ mergeParams: true });

//GET--------------------------------
//Get all tasks by dashboard ID
taskDashboardRoute.get(
	"/",
	isAuthorizedRead(dashboardService),
	getAllTaskByDashboardId(taskService)
);

//Get task in dashboard by taskID
taskDashboardRoute.get(
	"/:taskId",
	isAuthorizedRead(dashboardService),
	getTaskById(taskService)
);

//POST-------------------------------
//Post task in dashboard
taskDashboardRoute.post(
	"/",
	isAuthorizedWrite(dashboardService),
	createTask(taskService)
);

//PUT--------------------------------
//Update task by Id
taskDashboardRoute.put(
	"/:taskId",
	isAuthorizedWrite(dashboardService),
	updateTask(taskService)
);

//DELETE-----------------------------
//Delete task by Id
taskDashboardRoute.delete(
	"/:taskId",
	isAuthorizedWrite(dashboardService),
	deleteTask(taskService)
);

export default taskDashboardRoute;
