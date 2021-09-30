import * as yup from "yup";

function getLastMonth() {
  let date = new Date();
  date.setDate(1);
  date.setHours(-1);

  return date;
}

const validationSchema = yup.object({
  cardNumber: yup
    .string("Введите номер карты")
    .length(19, "Некорректный номер")
    .matches(/^\d+( \d+)*$/, "некорректный номер")
    .required("Введите номер карты"),
  expiryDate: yup
    .date()
    .min(getLastMonth(), "Карта просрочена")
    .required("Введите дату"),
  cardName: yup
    .string("Введите имя держателя")
    .min(2, "минимум две буквы")
    .required("Введите имя держателя"),
  cvc: yup.string("Введите cvc код").length(3, "Некорректный код cvc"),
});

export { validationSchema };
