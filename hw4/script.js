/* Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage */

const url = "https://jsonplaceholder.typicode.com/users";
const div = document.querySelector(".wrapper");

const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
console.log(getData(url));

try {
  const data = await getData(url);
  data.forEach((element) => {
    div.insertAdjacentHTML(
      "beforeend",
      `
                <div class="card">
                <h3 class="title">Name: ${element.name}</h3>
                <p class="subtitle">Username: ${element.username}</p>
                <button>Удалить</button>
                </div>

		`
    );
    localStorage.setItem(element.name, JSON.stringify(element));
  });
  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.addEventListener("click", removeParent);
  });

  function removeParent() {
    let revDiv = this.parentElement;
    revDiv.remove();
  }
} catch (error) {
  console.error("Что-то пошло не так!");
}
