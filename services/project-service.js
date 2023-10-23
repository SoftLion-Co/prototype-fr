import { baseUrl } from './apiConfig';

class ProjectService {

	async getAllProjects() {
		const response = await fetch(`${baseUrl}/project`, {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	}

	async getAllShortProjects() {
		const response = await fetch(`${baseUrl}/project/get-short-all`);
		const data = await response.json();
		return data;
	}

	async getProject(id) {
		const response = await fetch(`${baseUrl}/project/${id}`, {
			method: 'GET'
		});
		const data = await response.json();
		return data;
	}

	async deleteProject(id) {
		const response = await fetch(`${baseUrl}/project/${id}`, {
			method: 'DELETE'
		});
		if (!response.ok) {
			throw new Error('Oops!');
		}
		console.log(await response.json())
	}

	async createProject(projectData) {
		const response = await fetch(`${baseUrl}/project`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(projectData)
		});

		if (!response.ok) {
			throw new Error('Error creating project');
		}
		console.log(await response.json())
	}

	async updateProject(projectData) {
		const response = await fetch(`${baseUrl}/project`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(projectData)
		});

		if (!response.ok) {
			throw new Error('Error updating project');
		}
		console.log(await response.json())
	}

}

export default new ProjectService();