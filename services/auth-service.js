class AuthService {
  async signUp(signUpModel) {
    const response = await fetch(`https://localhost:7296/api/auth/sign-up`, {
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
    // return data;
  }

  async signIn(signInModel) {
    const response = await fetch(`https://localhost:7296/api/auth/sign-in`, {
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
    // return data;
  }

  async sendCode(email) {
    const response = await fetch("https://localhost:7296/api/auth/send-code", {
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

  async changePassword(email, newPassword) {
    const response = await fetch("https://localhost:7296/api/auth/change-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword }),
    });

    if (!response.ok) {
      throw new Error("Error ");
    }
	const data = await response.json();
	return data.result;
  }
  
}
export default new AuthService();
