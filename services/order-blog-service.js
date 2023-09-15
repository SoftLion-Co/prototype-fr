const baseUrl = "https://localhost:7296/api";

class OrderBlogService {

	async getAllOrderBlogs() {
		const response = await fetch(`${baseUrl}/order-blog`, {
			method: 'GET'
		});
		const data = await response.json();
		return data;
	}

	async changeTypeOrder(id, numberType) {
		const response = await fetch(`${baseUrl}/order-blog/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
				body: JSON.stringify(numberType)
			});
	
			if (!response.ok) {
				throw new Error('Error');
			}
		const data = await response.json();
		return data;
	}

	async getOrderBlog(id) {
		const response = await fetch(`${baseUrl}/order-blog/${id}`);
		const data = await response.json();
		return data;
	}

	async deleteOrderBlog(id) {
		const response = await fetch(`${baseUrl}/order-blog/${id}`, {
		method: 'DELETE'
	});
		if (!response.ok) {
		throw new Error('Oops!');
		}
		console.log(await response.json())
	}

	async createOrderBlog(orderBlogData) {
		const response = await fetch(`${baseUrl}/order-blog`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(orderBlogData)
		});

		if (!response.ok) {
			throw new Error('Error creating orderBlog');
		}
		console.log(await response.json())
	}

	async updateOrderBlog(orderBlogData) {
		const response = await fetch(`${baseUrl}/order-blog`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(orderBlogData)
		});

		if (!response.ok) {
			throw new Error('Error updating orderBlog');
		}
		console.log(await response.json())
	}

}

export default new OrderBlogService();