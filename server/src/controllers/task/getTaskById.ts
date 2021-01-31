import { Request, Response } from "express";
import TaskService from "../../services/task/TaskService";

export default function (taskService: TaskService) {
	return async (req: Request, res: Response) => {
		const { taskId } = req.params;

		try {
			const task = await taskService.getById(taskId);
			res.status(200).send(task);
		} catch (error) {
			res.status(404).send(error.message);
		}
	};
}
