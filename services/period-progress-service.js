const baseUrl = 'http://176.117.72.71:2891/api';

class PeriodProgressService {

	async getAllPeriodProgresses() {
		const response = await fetch(`${baseUrl}/period-progress`);
		const data = await response.json();
		return data;
	}

	async getPeriodProgress(id) {
		const response = await fetch(`${baseUrl}/period-progress/${id}`, {
			method: 'GET'
		});
		const data = await response.json();
		return data;
	}

	async deletePeriodProgress(id) {
		const response = await fetch(`${baseUrl}/period-progress/${id}`, {
		method: 'DELETE'
	});
		if (!response.ok) {
		throw new Error('Oops!');
		}
		console.log(await response.json())
	}

	async createPeriodProgress(periodProgressData) {
		const response = await fetch(`${baseUrl}/period-progress`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(periodProgressData)
		});

		if (!response.ok) {
			throw new Error('Error creating periodProgress');
		}
		console.log(await response.json())
	}

	async updatePeriodProgress(periodProgressData) {
		const response = await fetch(`${baseUrl}/period-progress`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(periodProgressData)
		});

		if (!response.ok) {
			throw new Error('Error updating periodProgress');
		}
		console.log(await response.json())
	}

}

export default new PeriodProgressService();