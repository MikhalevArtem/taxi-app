//ожидает {cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: "", token: AUTH_TOKEN}. возвращает {success: true} или {success: false, error: Сообщение об ошибке}
const postCard = (data) =>
  fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

//возвращает данные кредитной карты
const getCard = () =>
  fetch("https://loft-taxi.glitch.me/card?token=recwZWv2GzEqyfUtg").then(
    (response) => response.json()
  );

export { postCard, getCard };
