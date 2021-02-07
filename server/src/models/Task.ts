export default interface Task {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;
	title: string;
	content: string;
	order: number;
	labels: string[];
	colorLabel: string | null;
	listId: string | null;
}
