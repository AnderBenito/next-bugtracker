import List from "../../models/List";
import IListRepository from "../../repositories/list/IListRepository";
import ListNotFound from "./errors/ListNotFound";

export default class ListService {
	private repository;
	constructor(repository: IListRepository) {
		this.repository = repository;
	}

	async getAll() {
		return await this.repository.getAll();
	}

	async getAllByDashboardId(dashboardId: string) {
		return await this.repository.getAllByDashboardId(dashboardId);
	}

	async getById(listId: string) {
		const task = await this.repository.getById(listId);

		if (!task) throw new ListNotFound(listId);

		return task;
	}

	async create(list: List) {
		return await this.repository.create(list);
	}

	async update(list: List) {
		return await this.repository.update(list);
	}

	async delete(listId: string) {
		return await this.repository.delete(listId);
	}
}
