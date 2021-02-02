import TaskService from "../services/task/TaskService";
import DashboardService from "../services/dashboard/DashboardService";
import UserService from "../services/user/UserService";
import {
	dashboardRepository,
	taskRepository,
	userRepository,
} from "./repositories";

export const userService = new UserService(userRepository);
export const dashboardService = new DashboardService(dashboardRepository);
export const taskService = new TaskService(taskRepository);
