// Ожидает объект в запросе:{email: "test@test.com", password: "123123"}
// возвращает {success: true, token: AUTH_TOKEN} если логин и пароль верны, иначе {success: false, error: Сообщение об ошибке}
const login = (data) =>
  fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

const registration = (data) =>
  fetch("https://loft-taxi.glitch.me/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

export { login, registration };
