// позволяет получить маршрут. Принимает address1 и address2 в качестве аргументов.
const getWay = (address1, address2) =>
  fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`
  ).then((response) => response.json());

export { getWay };
