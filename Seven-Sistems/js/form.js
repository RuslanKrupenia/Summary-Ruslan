"use strict"
// Определяем поля формы
const name = document.querySelector('#form_right input[name="name"]')
const number = IMask(document.querySelector('#form_right input[name="number"]'), { mask: '+{38}(000)000-00-00' })
const email = document.querySelector('#form_right input[name="mail"]')
const time = new Date();

const nameModal = document.querySelector('#form_modal input[name="name"]')
const numberModal = IMask(document.querySelector('#form_modal input[name="number"]'), { mask: '+{38}(000)000-00-00' })
const emailModal = document.querySelector('#form_modal input[name="mail"]')
const timeModal = new Date();

// Валидация
const validateRight = new window.JustValidate('#form_right'); // форма контактов
validateRight.addField('#form_right input[name="name"]', [
  {
    rule: 'required',
    errorMessage: "Ім'я обов'язкове",
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Повинно бути більше 3 символів',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Повинно бути небільше 30 символів',
  },
])
validateRight.addField('#form_right input[name="mail"]', [
  {
    rule: 'required',
    errorMessage: 'Email обов\'язковий',
  },
  {
    rule: 'email',
    errorMessage: 'Email некорректний!',
  },
]);
validateRight.addField('#form_right input[name="number"]', [
  {
    rule: 'required',
    errorMessage: 'Номер телефону обов\'язковий',
  },
  {
    rule: 'minLength',
    value: 17,
    errorMessage: 'Некорректний номер телефону',

  },
  {
    rule: 'maxLength',
    value: 17,
    errorMessage: 'Некорректний номер телефону',
  },
]);

const validateModal = new window.JustValidate('#form_modal'); // форма в окне
validateModal.addField('#form_modal input[name="name"]', [
  {
    rule: 'required',
    errorMessage: "Ім'я обов'язкове",
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Повинно бути більше 3 символів',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Повинно бути небільше 30 символів',
  },
])
validateModal.addField('#form_modal input[name="mail"]', [
  {
    rule: 'required',
    errorMessage: 'Email обов\'язковий',
  },
  {
    rule: 'email',
    errorMessage: 'Email некорректний!',
  },
]);
validateModal.addField('#form_modal input[name="number"]', [
  {
    rule: 'required',
    errorMessage: 'Номер телефону обов\'язковий',
  },
  {
    rule: 'minLength',
    value: 17,
    errorMessage: 'Некорректний номер телефону',

  },
  {
    rule: 'maxLength',
    value: 17,
    errorMessage: 'Некорректний номер телефону',
  },
]);

// Обработка формы контактов (не модалка)
const form = document.querySelector('#form_right') // селектор формы
form.addEventListener('submit', event => { // обработчик формы
  event.preventDefault(); // отключаем дефолтное поведение при клике
  validateRight
  .revalidate() // проверяем форму перед отправкой
  .then(isValid => {
    if(!isValid) {return} // Если данные некоректные - прерываем выполнение
    console.log("submit", name.value, number.value, email.value, time.toString("dd.mm.yy HH:MM"));
    sendToTelegram(name.value, number.value, email.value, time.toString("dd.mm.yy HH:MM"))
  });
})

// Обработка формы контактов (модалка)
const formModal = document.querySelector('#form_modal') // селектор формы
formModal.addEventListener('submit', event => { // обработчик формы
  event.preventDefault(); // отключаем дефолтное поведение при клике
  validateModal
      .revalidate() // проверяем форму перед отправкой
      .then(isValid => {
        if(!isValid) {return} // Если данные некоректные - прерываем выполнение
        console.log("submit", name.value, number.value, email.value, time.toString("dd.mm.yy HH:MM"));
        sendToTelegram(nameModal.value, numberModal.value, emailModal.value, time.toString("dd.mm.yy HH:MM"))
      });
})

function sendToTelegram(name, number, email, time) // тут шлем инфо в канал
{
  axios.get('https://api.telegram.org/bot5413851596:AAGOn1zlJCJ0mr9WjL3XgDe-ORhB8t0-Khw/sendMessage', {
    params: {
      chat_id: "-1001828109659", // ID канала
      text: "<b>Нове звернення  ☀️🔥</b>\nℹ️ з сайту Seven-Sistems\n🤙 <b>Запит зворотнього зв'язку</b>\n🧍‍♂️ <b>" + name + "</b> \n📞 "+number+"\n📬 "+email+"\n ⏰" + time,
      chat_type: "private",
      parse_mode: "HTML"
    }
  })
  .then(function (response) {
    console.log(response);
    if(response.data.ok === true){
      alert("Успішно відправлено")
    }
  })
  .catch(function (error) {
    console.log(error);
    alert(error)
  })
  .then(function () {
    // выполняется всегда
  });
}

$('.form__button').click(function () {
  if($(this).attr('data-show') === "true") {
      $(this).text("Надіслати");
      $(this).attr('data-show', "false"); 
  }
  else {
      $(this).text("Надіслано");
      $(this).attr('data-show', "true"); 
  }
});


