import Task from "src/models/Task";
import ITaskRepository from "src/repositories/task/ITaskRepository";
import TaskNotFound from "./errors/TaskNotFound";

export default class TaskService {
	private repository;
	constructor(repository: ITaskRepository) {
		this.repository = repository;
	}

	async getAll() {
		return await this.repository.getAll();
	}

	async getAllByDashboardId(dashboardId: string) {
		return await this.repository.getAllByDashboardId(dashboardId);
	}

	async getById(taskId: string) {
		const task = await this.repository.getById(taskId);

		if (!task) throw new TaskNotFound(taskId);

		return task;
	}

	async create(task: Task) {
		return await this.repository.create(task);
	}

	async update(task: Task) {
		return await this.repository.update(task);
	}
}
