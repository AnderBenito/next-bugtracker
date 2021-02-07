import Task from "./Task";

export default interface List {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;
	title: string;
	order: number;
	color?: string | null;
	dashboardId: string | null;
}

export interface ListSelect extends List {
	tasks: Task[];
}
