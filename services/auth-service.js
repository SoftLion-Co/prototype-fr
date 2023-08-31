class AuthService{

	async signUp(signUpModel) {
		const response = await fetch(`https://localhost:7296/api/auth/sign-up`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
				body: JSON.stringify(signUpModel)
			});
			if (!response.ok) {
				throw new Error('Error ');
			}
			const data = await response.json();
			console.log(data);
			// return data;
	}

	async signIn(signInModel) {
		const response = await fetch(`https://localhost:7296/api/auth/sign-in`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
				body: JSON.stringify(signInModel)
			});
	
			if (!response.ok) {
				throw new Error('Error ');
			}
			const data = await response.json();
			console.log(data);
			// return data;
	}

}
export default new AuthService();