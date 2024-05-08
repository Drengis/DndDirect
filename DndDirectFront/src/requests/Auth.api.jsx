import LogininStore from "../cms/LogininStore";

class AuthApi {
    authorization = async (username, password) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/users/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error('Authorization failed');
            }

            const responseData = await response.json();

            LogininStore.setIsAuth(true);
            LogininStore.setID(responseData.user.id);
            LogininStore.setUsername(responseData.user.username);
            LogininStore.setPassword(responseData.user.password);
            LogininStore.setEmail(responseData.user.email);
            LogininStore.setToken(responseData.token);

        } catch (error) {
            console.error(error);
        }
    };

    registration = async (username, password, email) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/users/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                }),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const responseData = await response.json();
            console.log(responseData)

            LogininStore.setIsAuth(true);
            LogininStore.setID(responseData.user.id);
            LogininStore.setUsername(responseData.user.username);
            LogininStore.setPassword(responseData.user.password);
            LogininStore.setEmail(responseData.user.email);
            LogininStore.setToken(responseData.token);

        } catch (error) {
            console.error(error);
        }
    };
}

export default new AuthApi();