import { baseUrl } from "./apiConfig";

class OrderProjectService {
  async getAllOrderProjects() {
    const response = await fetch(`${baseUrl}/order-project`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }

  async changeTypeOrder(id, numberType) {
    const response = await fetch(
      `${baseUrl}/order-project/change-type?id=${id}&typeNumber=${numberType}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(numberType),
      }
    );

    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    return data;
  }

  async getOrderProject(id) {
    const response = await fetch(`${baseUrl}/order-project/${id}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Oops!");
    }
    return data;
  }

  async deleteOrderProject(id) {
    const response = await fetch(`${baseUrl}/order-project/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Oops!");
    }
    console.log(await response.json());
  }

  async createOrderProject(orderProjectData) {
    const response = await fetch(`${baseUrl}/order-project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderProjectData),
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error("Error creating orderProject");
    }
  }

  // async updateOrderProject(orderProjectData) {
  // 	const response = await fetch(`${baseUrl}/order-project`, {
  // 	method: 'PUT',
  // 	headers: {
  // 		'Content-Type': 'application/json'
  // 	},
  // 		body: JSON.stringify(orderProjectData)
  // 	});
  // 	console,log(orderProjectData);
  // 	if (!response.ok) {
  // 		throw new Error('Error updating orderProject');
  // 	}
  // 	console.log(await response.json())
  // }
}

export default new OrderProjectService();
