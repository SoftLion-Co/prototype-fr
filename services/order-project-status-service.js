import baseUrl from "./base-links/config.json"

class OrderProjectStatusService {

	async getAllOrderProjectStatuses() {
		const response = await fetch(`${baseUrl}/order-project-status`);
		const data = await response.json();
		return data;
	}

	async getOrderProjectStatus(id) {
		const response = await fetch(`${baseUrl}/order-project-status/${id}`, {
			method: 'GET'
		});
		const data = await response.json();
		return data;
	}

	async deleteOrderProjectStatus(id) {
		const response = await fetch(`${baseUrl}/order-project-status/${id}`, {
		method: 'DELETE'
	});
		if (!response.ok) {
		throw new Error('Oops!');
		}
		console.log(await response.json())
	}

	async createOrderProjectStatus(orderProjectStatusData) {
		const response = await fetch(`${baseUrl}/order-project-status`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(orderProjectStatusData)
		});

		if (!response.ok) {
			throw new Error('Error creating orderProjectStatus');
		}
		console.log(await response.json())
	}

	async updateOrderProjectStatus(orderProjectStatusData) {
		const response = await fetch(`${baseUrl}/order-project-status`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(orderProjectStatusData)
		});

		if (!response.ok) {
			throw new Error('Error updating orderProjectStatus');
		}
		console.log(await response.json())
	}

}

export default new OrderProjectStatusService();