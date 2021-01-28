export default interface Dashboard {
	id?: string;
	createdAt?: Date;
	title: string;
	isPublic: boolean;
	userId: string | null;
}
