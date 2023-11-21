import { baseUrl } from './apiConfig';

class ServicesService {

	async getAllServices(id) {
		const response = await fetch(`${baseUrl}/service`, {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	}
}
export default new ServicesService();