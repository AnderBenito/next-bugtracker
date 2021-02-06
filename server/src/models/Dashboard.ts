import List from "./List";

export default interface Dashboard {
	id?: string;
	createdAt?: Date;
	title: string;
	color?: string | null;
	isPublic: boolean;
	userId: string | null;
}

export interface DashboardLists extends Dashboard {
	lists?: List[];
}
