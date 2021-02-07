import Dashboard from "../../models/Dashboard";
import List from "../../models/List";
import IDashboardRepository from "../../repositories/dashboard/IDashboardRepository";
import IListRepository from "../../repositories/list/IListRepository";
import DashboardCreateError from "./errors/DashboardCreateError";
import DashboardNotFound from "./errors/DashboardNotFound";
import DashboardUpdateError from "./errors/DashboardUpdateError";

export default class DashboardService {
	private repository: IDashboardRepository;
	private listRepository: IListRepository;

	constructor(
		repository: IDashboardRepository,
		listRepository: IListRepository
	) {
		this.repository = repository;
		this.listRepository = listRepository;
	}

	async getAll() {
		return await this.repository.getAll();
	}

	async getAllByUserId(userId: string) {
		return await this.repository.getAllByUserId(userId);
	}

	async getById(id: string) {
		const dashboard = await this.repository.getById(id);

		if (!dashboard) throw new DashboardNotFound(id);

		return dashboard;
	}

	async create(dashboard: Dashboard) {
		//Create dashboard and default lists
		try {
			const newDashboard = await this.repository.create(dashboard);
			await this.createDefaultLists(newDashboard.id!);
			return newDashboard;
		} catch (error) {
			throw new DashboardCreateError(error.message);
		}
	}

	async update(dashboard: Dashboard) {
		if (!dashboard.id) throw new Error("No id provided");

		try {
			return await this.repository.update(dashboard);
		} catch (error) {
			console.error(error);
			throw new DashboardUpdateError(dashboard.id, error.message);
		}
	}

	async delete(id: string) {
		if (!id) throw new Error("No id provided");

		try {
			return await this.repository.delete(id);
		} catch (error) {
			console.error(error);
			throw new DashboardNotFound(id);
		}
	}

	private async createDefaultLists(dashboardId: string) {
		const defaultTodo: List = {
			title: "To do",
			order: 0,
			dashboardId,
		};
		const defaultInProgress: List = {
			title: "In Progress",
			order: 1,
			dashboardId,
		};
		const defaultDone: List = {
			title: "Done",
			order: 2,
			dashboardId,
		};

		await this.listRepository.create(defaultTodo);
		await this.listRepository.create(defaultInProgress);
		await this.listRepository.create(defaultDone);
	}
}
