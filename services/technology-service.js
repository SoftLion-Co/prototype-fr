import baseUrl from "./base-links/config.json"

class TechnologyService {

	async getAllTechnologies() {
		const response = await fetch(`${baseUrl}/technology`);
		const data = await response.json();
		return data;
	}

	async getTechnology(id) {
		const response = await fetch(`${baseUrl}/technology/${id}`, {
			method: 'GET'
		});
		const data = await response.json();
		return data;
	}

	async deleteTechnology(id) {
		const response = await fetch(`${baseUrl}/technology/${id}`, {
		method: 'DELETE'
	});
		if (!response.ok) {
		throw new Error('Oops!');
		}
		console.log(await response.json())
	}

	async createTechnology(technologyData) {
		const response = await fetch(`${baseUrl}/technology`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(technologyData)
		});

		if (!response.ok) {
			throw new Error('Error creating technology');
		}
		console.log(await response.json())
	}

	async updateTechnology(technologyData) {
		const response = await fetch(`${baseUrl}/technology`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(technologyData)
		});

		if (!response.ok) {
			throw new Error('Error updating technology');
		}
		console.log(await response.json())
	}

}

export default new TechnologyService();