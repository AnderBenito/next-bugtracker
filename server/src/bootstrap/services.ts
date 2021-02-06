import TaskService from "../services/task/TaskService";
import DashboardService from "../services/dashboard/DashboardService";
import UserService from "../services/user/UserService";
import ListService from "../services/list/ListService";
import {
	dashboardRepository,
	listRepository,
	taskRepository,
	userRepository,
} from "./repositories";

export const userService = new UserService(userRepository);
export const dashboardService = new DashboardService(
	dashboardRepository,
	listRepository
);
export const listService = new ListService(listRepository);
export const taskService = new TaskService(taskRepository);
