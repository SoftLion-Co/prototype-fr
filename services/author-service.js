const baseUrl = "http://localhost:7296/api";

class AuthorService {

	async getAllAuthors() {
		const response = await fetch(`${baseUrl}/author`, {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	}

	async getAllShortAuthors() {
		const response = await fetch(`${baseUrl}/author/get-short-all`);
		const data = await response.json();
		return data;
	}

	async getAuthor(id) {
		const response = await fetch(`${baseUrl}/author/${id}`, {
			method: 'GET'
		});
		const data = await response.json();
		return data;
	}

	async deleteAuthor(id) {
		const response = await fetch(`${baseUrl}/author/${id}`, {
			method: 'DELETE'
		});
		if (!response.ok) {
			throw new Error('Oops!');
		}
		console.log(await response.json())
	}

	async createAuthor(authorData) {
		const response = await fetch(`${baseUrl}/author`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(authorData)
		});

		if (!response.ok) {
			throw new Error('Error creating author');
		}
		console.log(await response.json())
	}

	async updateAuthor(authorData) {
		const response = await fetch(`${baseUrl}/author`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(authorData)
		});

		if (!response.ok) {
			throw new Error('Error updating author');
		}
		console.log(await response.json())
	}

}

export default new AuthorService();