export default class DashboardCreateError extends Error {
	constructor(msg: string) {
		const message = `Error creating dashboard: ${msg}`;
		super(message);
		this.name = "DashboardCreateError";
	}
}
