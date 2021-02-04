import { Request, Response } from "express";
import TaskService from "src/services/task/TaskService";

export default function (taskService: TaskService) {
	return async (req: Request, res: Response) => {
		const { taskId } = req.params;

		try {
			const newTask = await taskService.delete(taskId);
			res.status(201).send(newTask);
		} catch (error) {
			res.status(400).send(error.message);
		}
	};
}
