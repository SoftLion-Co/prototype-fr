import { baseUrl } from "./apiConfig";

class CustomerService {
  async getAllCustomers() {
    const response = await fetch(`${baseUrl}/customer`);
    const data = await response.json();
    return data;
  }

  async getCustomer(id) {
    const response = await fetch(`${baseUrl}/customer/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }

  async deleteCustomer(id) {
    const response = await fetch(`${baseUrl}/customer/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Oops!");
    }
    console.log(await response.json());
  }

  async updateCustomer(customerData) {
    const response = await fetch(`${baseUrl}/customer`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData),
    });

    if (!response.ok) {
      throw new Error("Error updating customer");
    }
    console.log(await response.json());
  }
}

export default new CustomerService();
