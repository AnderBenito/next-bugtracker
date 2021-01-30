export default class DashboardUpdateError extends Error {
	constructor(id: string, keys?: any) {
		const message = `Dashboard with id: ${id} could not be updated\nFollowing keys missing: ${keys}`;
		super(message);
		this.name = "DashboardUpdateError";
	}
}
