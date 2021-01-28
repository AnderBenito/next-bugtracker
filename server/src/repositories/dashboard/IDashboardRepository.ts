import Dashboard from "src/models/Dashboard";

export default interface IDashboardRepository {
	create: (dashboard: Dashboard) => Promise<Dashboard>;
	getById: (id: string) => Promise<Dashboard | null>;
}
