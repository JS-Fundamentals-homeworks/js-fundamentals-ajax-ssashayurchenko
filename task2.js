// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

let userNameInput = document.querySelector("#userNameInput");
let getUserButton = document.querySelector("#getUserButton");
let userCity = document.querySelector("#userCity");

getUserButton.addEventListener("click", function () {
  let userName = userNameInput.value.trim();

  if (userName) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        let user = users.find((user) => user.name === userName);
        if (user) {
          userCity.textContent = user.address.city;
        } else {
          userCity.textContent = "User not found";
        }
      });
  }
});
