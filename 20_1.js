//массив

let heroes = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLs8OTgTBC22PAUuICe_l-5MzVcZvycZzoW9ctwbwqyWDFZ4JDhGjVa5zbRCAl_AT6OSY&usqp=CAU",
    name: "Бэтмен",
    realname: "Брюс Уэйн",
    universe: "DC comics",
    friends: "Робин, Бэтгерл",
    superpower: "интеллект,ловкость",
    rate: JSON.parse(localStorage.getItem("1 rating")) || "",
    id:"1",
  },

  {
    img: "https://cdnstatic.rg.ru/uploads/images/129/34/22/super.jpg",
    name: "Супермен",
    realname: "Кларк Кент",
    universe: "DC comics",
    friends: "собака",
    superpower: "полет",
    rate: JSON.parse(localStorage.getItem("2 rating")) || "",
    id:"2",
  },

  {
    img: "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/56b2a921ff6dea56531fe2ed2f00efa0/100x64_3",
    name: "Железный человек",
    realname: "Кларк Кент",
    universe: "Marvel Comics",
    friends: "Мстители",
    superpower: "высокий уровень интеллекта, широкие познания науки и техники",
    rate: JSON.parse(localStorage.getItem("3 rating")) || "",
    id:"3",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let heroContent = "";
  for (let hero of heroes) {
    heroContent += `<div class="hero ${hero.id}">
        <h2> ${hero.name}</h2>
        <img src="${hero.img}" style="width:400px"><br>
        <div> Вселенная: ${hero.universe}</div>
        <div>Настоящее имя: ${hero.realname}</div>
        <div>Друзья: ${hero.friends}</div>
        <div> Суперспособности: ${hero.superpower}</div>
        <div> Рейтинг: </div>
        <label><span>  </span>
        <input type="radio" class="rating" name ="${hero.id}" value="1" required>
        <input type="radio" class="rating" name ="${hero.id}" value="2" required>
        <input type="radio" class="rating" name ="${hero.id}" value="3" required>
        <input type="radio" class="rating" name ="${hero.id}" value="4" required>
        <input type="radio" class="rating" name ="${hero.id}" value="5" required>
      </label> 
        </div>`;

  }

  document.querySelector(".container").innerHTML = heroContent;


  if (localStorage.getItem(`${this.id} rating`)) {
    rates[0].value = localStorage.getItem(`${this.id} rating`);
  }
  let ratings = document.querySelectorAll('input[type="radio"]');
  console.log(ratings);
  // перебираем массив радиокнопок
  for (let i = 0; i < ratings.length; i++) {
    // на каждую радиокнопку вешаем клик
    ratings[i].addEventListener("click", function (event) {
      let label = this.parentNode;
      let span = label.querySelector("span");
      span.textContent = this.value;
      
      console.log(this.value);

    

      localStorage.setItem(`${this.name} rating`, JSON.stringify(this.value));
    });
  }
});

