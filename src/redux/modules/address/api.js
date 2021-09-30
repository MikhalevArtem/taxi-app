// выдаёт список доступных адресов
// {"addresses":[...]}
const getAddresses = () =>
  fetch("https://loft-taxi.glitch.me/addressList").then((response) =>
    response.json()
  );

export { getAddresses };
