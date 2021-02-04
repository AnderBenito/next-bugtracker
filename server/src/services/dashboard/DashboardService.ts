import Dashboard from "../../models/Dashboard";
import IDashboardRepository from "../../repositories/dashboard/IDashboardRepository";
import DashboardNotFound from "./errors/DashboardNotFound";
import DashboardUpdateError from "./errors/DashboardUpdateError";

export default class DashboardService {
	private repository: IDashboardRepository;

	constructor(repository: IDashboardRepository) {
		this.repository = repository;
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
		const newDashboard = await this.repository.create(dashboard);

		return newDashboard;
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
}
