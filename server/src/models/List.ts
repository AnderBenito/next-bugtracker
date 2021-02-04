import Task from "./Task";

export default interface List {
	id?: string;
	createdAt?: Date;
	title: string;
	color: string | null;
	dashboardId: string | null;
}

export interface ListSelect extends List {
	tasks: Task[];
}
