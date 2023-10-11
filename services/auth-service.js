import { baseUrl } from './apiConfig';

class AuthService {
  async signUp(signUpModel) {
    const response = await fetch(`${baseUrl}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpModel),
    });
    if (!response.ok) {
      throw new Error("Error ");
    }
    const data = await response.json();
    console.log(data);
    return data.result;
  }

  async signIn(signInModel) {
    const response = await fetch(`${baseUrl}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInModel),
    });

    if (!response.ok) {
      throw new Error("Error ");
    }
    const data = await response.json();
    console.log(data);
    return data.result;
  }

  async sendCode(email) {
    const response = await fetch(`${baseUrl}/auth/send-code`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Error ");
    }
	const data = await response.json();
	return data.result;
  }

  async changePassword(model) {
    const response = await fetch(`${baseUrl}/auth/change-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(model),
    });

    if (!response.ok) {
      throw new Error("Error ");
    }
	const data = await response.json();
	return data.result;
  }
  
}
export default new AuthService();
