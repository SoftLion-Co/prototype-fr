import { baseUrl } from "./apiConfig";

// Перед заливом  в product видалити const token
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkRhbmlUZXIiLCJlbWFpbCI6ImN1c3RvbWVyQGdtYWlsLmNvbSIsIklkIjoiMWQ3ZjQ3NDEtMmNiMS00YmFmLWExZjktNjVkZDk1MjA4MzMzIiwibmJmIjoxNzAxNzk0NjY4LCJleHAiOjE3MDE3OTU1NjgsImlhdCI6MTcwMTc5NDY2OCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwOyBodHRwczovL2xvY2FsaG9zdDo1MDAxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwOyBodHRwczovL2xvY2FsaG9zdDo1MDAxIn0.HnZV1R9TsbUfg1o2Yafhy8aNLUIMlSJUDP0YVfZ_yI8";
localStorage.setItem("token", token);

class CustomerService {
  async getAllCustomers() {
    const response = await fetch(`${baseUrl}/customer`);
    const data = await response.json();
    return data;
  }

  async getCustomer(id) {
    const token = localStorage.getItem("token");
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) {
      throw new Error("Invalid token format");
    }
    const decodedPayload = JSON.parse(atob(tokenParts[1]));
    const userID = decodedPayload.Id || decodedPayload.id;
    if (!userID) {
      throw new Error("Unable to get user ID from token");
    }
    const response = await fetch(`${baseUrl}/customer/${userID}`, {
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
