import { baseUrl } from './apiConfig';

class BlogService {

	async getAllBlogs() {
		const response = await fetch(`${baseUrl}/blog`,{
			method: 'GET',
		});
		const data = await response.json();
		return data;
	}

	async getAllShortBlogs() {
		const response = await fetch(`${baseUrl}/blog/get-short-all`);
		const data = await response.json();
		return data;
	}

	async getBlog(id) {
		const response = await fetch(`${baseUrl}/blog/${id}`, {
			method: 'GET'
		});
		const data = await response.json();
		return data;
	}

	async deleteBlog(id) {
		const response = await fetch(`${baseUrl}/blog/${id}`, {
		method: 'DELETE'
	});
		if (!response.ok) {
		throw new Error('Oops!');
		}
		console.log(await response.json())
	}

	async createBlog(blogData) {
		const response = await fetch(`${baseUrl}/blog`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(blogData)
		});

		if (!response.ok) {
			throw new Error('Error creating blog');
		}
		console.log(await response.json())
	}

	async updateBlog(blogData) {
		const response = await fetch(`${baseUrl}/blog`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(blogData)
		});

		if (!response.ok) {
			throw new Error('Error updating blog');
		}
		console.log(await response.json())
	}

}

export default new BlogService();