import List from "../../models/List";

export default interface IListRepository {
	getAll: () => Promise<List[]>;
	getAllByDashboardId: (dashboardId: string) => Promise<List[]>;
	getById: (id: string) => Promise<List | null>;
	create: (list: List) => Promise<List>;
	update: (list: List) => Promise<List>;
	delete: (id: string) => Promise<List>;
}
