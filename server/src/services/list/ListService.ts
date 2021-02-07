import List from "../../models/List";
import IListRepository from "../../repositories/list/IListRepository";
import ListCreateError from "./errors/ListCreateError";
import ListNotFound from "./errors/ListNotFound";

export default class ListService {
	private repository;
	constructor(repository: IListRepository) {
		this.repository = repository;
	}

	async getAll() {
		return await this.repository.getAll();
	}

	async getAllByUserId(userId: string) {
		return await this.repository.getAllByUserId(userId);
	}

	async getAllWithTasks() {
		return await this.repository.getAllWithTasks();
	}

	async getAllByDashboardId(dashboardId: string) {
		return await this.repository.getAllByDashboardId(dashboardId);
	}

	async getAllWithTasksByDashboardId(dashboardId: string) {
		return await this.repository.getAllWithTasksByDashboardId(dashboardId);
	}

	async getById(listId: string) {
		const task = await this.repository.getById(listId);

		if (!task) throw new ListNotFound(listId);

		return task;
	}

	async create(list: List) {
		//Find las list of the dashboard
		const greaterOrderList = await this.repository.getByLastOrder(
			list.dashboardId!
		);

		//Asing greater order
		list.order = greaterOrderList ? greaterOrderList.order + 1 : 0;

		//Create
		try {
			return await this.repository.create(list);
		} catch (error) {
			console.error(error.message);
			throw new ListCreateError(error.message);
		}
	}

	async update(list: List) {
		return await this.repository.update(list);
	}

	async delete(listId: string) {
		return await this.repository.delete(listId);
	}
}
