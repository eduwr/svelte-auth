import type { PageServerLoad } from "./$types";
type Country = {
	name: string;
	id: number;
};
export const load: PageServerLoad = async ({locals: {supabase}}) => {
	const { data } = await supabase.from('countries').select();

	console.log(data);
	return {
		countries: (data ?? []) as Country[]
	};
}
