import Task from "src/models/Task";
import ITaskRepository from "src/repositories/task/ITaskRepository";

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

	async create(task: Task) {
		return await this.repository.create(task);
	}
}
