export default class ListCreateError extends Error {
	constructor(msg: string) {
		const message = `Error creating list: ${msg}`;
		super(message);
		this.name = "ListCreateError";
	}
}
