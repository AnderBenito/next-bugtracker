export default class TaskNotFound extends Error {
	constructor(id: string) {
		const message = `Task with id: ${id} not found`;
		super(message);
		this.name = "TaskNotFound";
	}
}
