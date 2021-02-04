import List, { ListSelect } from "../../models/List";

export default interface IListRepository {
	getAll: () => Promise<List[]>;
	getAllWithTasks: () => Promise<ListSelect[]>;
	getAllByDashboardId: (dashboardId: string) => Promise<List[]>;
	getAllWithTasksByDashboardId: (dashboardId: string) => Promise<ListSelect[]>;
	getById: (id: string) => Promise<List | null>;
	create: (list: List) => Promise<List>;
	update: (list: List) => Promise<List>;
	delete: (id: string) => Promise<List>;
}
