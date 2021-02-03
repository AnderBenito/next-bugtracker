export default interface List {
	id?: string;
	createdAt?: Date;
	title: string;
	color: string | null;
	dashboardId: string | null;
}
