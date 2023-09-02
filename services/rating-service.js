const baseUrl = "http://localhost:7296/api";

class RatingService {

	async getAllRatingsByProjectId(id) {
		const response = await fetch(`${baseUrl}/rating/${id}`, {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	}

	async createRating(ratingData) {
		const response = await fetch(`${baseUrl}/rating`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(ratingData)
		});

		if (!response.ok) {
			throw new Error('Error creating rating');
		}
		console.log(await response.json())
	}
}
export default new RatingService();