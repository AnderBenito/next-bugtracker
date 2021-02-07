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

	async getAllByUserId(userId: string) {
		return await this.repository.getAllByUserId(userId);
	}

	async getAllByListId(listId: string) {
		return await this.repository.getAllByListId(listId);
	}

	async getById(taskId: string) {
		const task = await this.repository.getById(taskId);

		if (!task) throw new TaskNotFound(taskId);

		return task;
	}

	async create(task: Task) {
		//Get task with max order
		const maxOrderTask = await this.repository.getByLastOrder(task.listId!);

		//Asing greater order
		task.order = maxOrderTask ? maxOrderTask.order + 1 : 0;

		//Create
		return await this.repository.create(task);
	}

	async update(task: Task) {
		return await this.repository.update(task);
	}

	async delete(taskId: string) {
		return await this.repository.delete(taskId);
	}
}
