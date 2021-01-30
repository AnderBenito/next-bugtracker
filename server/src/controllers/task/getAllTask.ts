import { Request, Response } from "express";
import TaskService from "src/services/task/TaskService";

export default function (taskService: TaskService) {
	return async (_: Request, res: Response) => {
		const tasks = await taskService.getAll();

		res.status(200).send(tasks);
	};
}
