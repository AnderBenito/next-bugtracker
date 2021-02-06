import { Request, Response } from "express";
import TaskService from "src/services/task/TaskService";

export default function (taskService: TaskService) {
	return async (req: Request, res: Response) => {
		const userId = (req.user as any).id;

		try {
			const tasks = await taskService.getAllByUserId(userId);
			res.status(200).send(tasks);
		} catch (error) {
			res.status(400).send(error.message);
		}
	};
}
