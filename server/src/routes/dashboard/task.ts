import express from "express";
import isAuthorizedRead from "../../middleware/dashboard/isAuthorizedRead";
import createTask from "../../controllers/task/createTask";
import isAuthorizedWrite from "../../middleware/dashboard/isAuthorizedWrite";
import getTaskById from "../../controllers/task/getTaskById";
import updateTask from "../../controllers/task/updateTask";
import deleteTask from "../../controllers/task/deleteTask";
import { dashboardService, taskService } from "../../bootstrap/services";
import getAllTaskByListId from "../../controllers/task/getAllTaskByListId";

const taskDashboardRoute = express.Router({ mergeParams: true });

//GET--------------------------------
//Get all tasks by list ID
taskDashboardRoute.get(
	"/",
	isAuthorizedRead(dashboardService),
	getAllTaskByListId(taskService)
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
