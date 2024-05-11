import LogininStore from "../cms/LogininStore";
import AlertStore from "../cms/AlertStore";
import RegStore from "../cms/RegStore";
import AuthStore from "../cms/AuthStore";


const authorization = async (username, password) => {
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
            AlertStore.AddErrorAlert('Неверный логин или пароль')
            return
        }

        const responseData = await response.json();

        LogininStore.setIsAuth(true);
        LogininStore.setID(responseData.user.id);
        LogininStore.setUsername(responseData.user.username);
        LogininStore.setPassword(responseData.user.password);
        LogininStore.setEmail(responseData.user.email);
        LogininStore.setToken(responseData.token);
        AlertStore.AddSuccessAlert('Авторизация успешна')
        AuthStore.close()



    } catch (error) {
        console.error(error);
    }
};

const registration = async (username, password, email) => {
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
            AlertStore.AddErrorAlert('Некорректные данные')
            return
        }

        const responseData = await response.json();

        LogininStore.setIsAuth(true);
        LogininStore.setID(responseData.user.id);
        LogininStore.setUsername(responseData.user.username);
        LogininStore.setPassword(responseData.user.password);
        LogininStore.setEmail(responseData.user.email);
        LogininStore.setToken(responseData.token);
        AlertStore.AddSuccessAlert('Регистрация успешна')
        RegStore.close()

    } catch (error) {
        console.error(error);
    }
};


export { authorization, registration }