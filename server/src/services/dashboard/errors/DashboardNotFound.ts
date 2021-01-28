export default class DashboardNotFound extends Error {
	constructor(id: string) {
		const message = `Dashboard with id: ${id} not found`;

		super(message);
		this.name = "DashboardNotFound";
	}
}
