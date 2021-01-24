export default interface User {
	id?: string;
	createdAt?: Date;
	email: string;
	displayName: string;
	googleId?: string | null;
	avatarUrl?: string | null;
}
