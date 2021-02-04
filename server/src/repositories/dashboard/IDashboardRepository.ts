import Dashboard from "../../models/Dashboard";

export default interface IDashboardRepository {
	getAll: () => Promise<Dashboard[]>;
	getAllByUserId: (userId: string) => Promise<Dashboard[]>;
	getById: (id: string) => Promise<Dashboard | null>;
	create: (dashboard: Dashboard) => Promise<Dashboard>;
	update: (dashboard: Dashboard) => Promise<Dashboard>;
	delete: (id: string) => Promise<Dashboard>;
}
