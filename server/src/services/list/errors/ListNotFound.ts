export default class ListNotFound extends Error {
	constructor(id: string) {
		const message = `List with id: ${id} not found`;
		super(message);
		this.name = "ListNotFound";
	}
}
