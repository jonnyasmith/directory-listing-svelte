export interface Business {
	id: number;
	name: string;
	slug: string; // URL-friendly version of the name
	category: string;
	address: string;
	phone: string;
}
