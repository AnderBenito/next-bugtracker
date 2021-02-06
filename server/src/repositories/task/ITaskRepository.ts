import Task from "../../models/Task";

export default interface ITaskRepository {
	getAll: () => Promise<Task[]>;
	getAllByUserId: (userId: string) => Promise<Task[]>;
	getAllByListId: (dashboardId: string) => Promise<Task[]>;
	getById: (id: string) => Promise<Task | null>;
	create: (task: Task) => Promise<Task>;
	update: (task: Task) => Promise<Task>;
	delete: (id: string) => Promise<Task>;
}
