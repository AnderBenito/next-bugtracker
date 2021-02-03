export default interface Task {
	id?: string;
	createdAt?: Date;
	title: string;
	content: string;
	category: string;
	labels: string[];
	colorLabel: string | null;
	listId: string | null;
}
