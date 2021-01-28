import Dashboard from "../../models/Dashboard";
import IDashboardRepository from "../../repositories/dashboard/IDashboardRepository";
import DashboardNotFound from "./errors/DashboardNotFound";

export default class DashboardService {
	private repository: IDashboardRepository;

	constructor(repository: IDashboardRepository) {
		this.repository = repository;
	}

	async create(dashboard: Dashboard) {
		const newDashboard = await this.repository.create(dashboard);

		return newDashboard;
	}

	async getById(id: string) {
		const dashboard = await this.repository.getById(id);

		if (!dashboard) throw new DashboardNotFound(id);

		return dashboard;
	}

	async getAll() {
		return await this.repository.getAll();
	}
}
