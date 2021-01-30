import Dashboard from "../../models/Dashboard";
import IDashboardRepository from "../../repositories/dashboard/IDashboardRepository";
import DashboardNotFound from "./errors/DashboardNotFound";

export default class DashboardService {
	private repository: IDashboardRepository;

	constructor(repository: IDashboardRepository) {
		this.repository = repository;
	}

	async getAll() {
		return await this.repository.getAll();
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

		return this.repository.update(dashboard);
	}

	async delete(id: string) {
		if (!id) throw new Error("No id provided");

		return this.repository.delete(id);
	}
}
