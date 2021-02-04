import { Request, Response } from "express";
import Task from "src/models/Task";
import TaskService from "src/services/task/TaskService";

export default function (taskService: TaskService) {
	return async (req: Request, res: Response) => {
		const { taskId } = req.params;

		const task: Task = {
			id: taskId,
			...req.body,
		};

		try {
			const newTask = await taskService.update(task);
			res.status(201).send(newTask);
		} catch (error) {
			res.status(400).send(error.message);
		}
	};
}
