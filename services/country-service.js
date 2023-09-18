const baseUrl = "http://localhost:7296/api";

class CountryService {

	async getAllCountries() {
		const response = await fetch(`${baseUrl}/country`);
		const data = await response.json();
		return data;
	}

	async getCountry(id) {
		const response = await fetch(`${baseUrl}/country/${id}`, {
			method: 'GET'
		});
		const data = await response.json();
		return data;
	}

	async deleteCountry(id) {
		const response = await fetch(`${baseUrl}/country/${id}`, {
		method: 'DELETE'
	});
		if (!response.ok) {
		throw new Error('Oops!');
		}
		console.log(await response.json())
	}

	async createCountry(countryData) {
		const response = await fetch(`${baseUrl}/country`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(countryData)
		});

		if (!response.ok) {
			throw new Error('Error creating country');
		}
		console.log(await response.json())
	}

	async updateCountry(countryData) {
		const response = await fetch(`${baseUrl}/country`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(countryData)
		});

		if (!response.ok) {
			throw new Error('Error updating country');
		}
		console.log(await response.json())
	}

}

export default new CountryService();