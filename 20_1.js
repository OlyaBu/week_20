//массив
 let heroes =
    [{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLs8OTgTBC22PAUuICe_l-5MzVcZvycZzoW9ctwbwqyWDFZ4JDhGjVa5zbRCAl_AT6OSY&usqp=CAU",  
name:"Бэтмен",
    realname:"Брюс Уэйн",
    universe:"DC comics",
    friends:"Робин, Бэтгерл",
    superpower:"интеллект,ловкость",
    rate:""
},
{
    img: "https://cdnstatic.rg.ru/uploads/images/129/34/22/super.jpg",
    name:"Супермен",
    realname:"Кларк Кент",
    universe:"DC comics",
    friends:"собака",
    superpower:"полет",
    rate:""
},
{
    img: "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/56b2a921ff6dea56531fe2ed2f00efa0/100x64_3",
    name:"Железный человек",
    realname:"Кларк Кент",
    universe:"Marvel Comics",
    friends:"Мстители",
    superpower:"высокий уровень интеллекта, широкие познания науки и техники",
   rate:""
}];

document.addEventListener("DOMContentLoaded", function() {

let heroContent="";

for (let hero of heroes) {
    heroContent += `<div class="hero">
        <h2> ${hero.name}</h2>
        <img src="${hero.img}" style="width:400px"><br>
        <div> Вселенная: ${hero.universe}</div>
        <div>Настоящее имя: ${hero.realname}</div>
        <div>Друзья: ${hero.friends}</div>
        <div> Суперспособности: ${hero.superpower}</div>
        <div> Рейтинг: </div>
        </div>`;
    
};


document.querySelector(".container").innerHTML = heroContent;

let localrating = JSON.parse(localStorage.getItem('localrating'));

  });






//загрузка текста на страницу, создание текстов

// сохранение инфы в локал стордж

//загрузка из локал стордж


