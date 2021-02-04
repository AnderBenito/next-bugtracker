import { Request, Response } from "express";
import Task from "src/models/Task";
import TaskService from "src/services/task/TaskService";

export default function (taskService: TaskService) {
	return async (req: Request, res: Response) => {
		const { dashboardId } = req.params;

		const task: Task = {
			dashboardId,
			...req.body,
		};

		try {
			const newTask = await taskService.create(task);
			res.status(201).send(newTask);
		} catch (error) {
			res.status(400).send(error.message);
		}
	};
}
