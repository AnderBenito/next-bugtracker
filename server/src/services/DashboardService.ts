import Dashboard from "../models/Dashboard";
import IDashboardRepository from "../repositories/dashboard/IDashboardRepository";

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
		return await this.repository.getById(id);
	}
}
