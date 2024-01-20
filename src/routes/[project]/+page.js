import { projects } from '$lib/data.js';

console.log(projects);

export function load({ params }) {
	console.log(params.project);

	const currentProject = projects[params.project];

	return {
		props: {
			currentProject
		}
	};
}
