/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
let personalMovieDB = {
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    askQuantityFilm : function start (){
      personalMovieDB.count = +prompt('сколько фильмовы вы уже посмотрели?');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)  ){
       return start();
    }},
    askFilm : function (){
      if (personalMovieDB.count < 10){
          alert('мало фильмов');
      } else if (personalMovieDB.count >=10 && personalMovieDB.count<=30){
          alert('вы классный зритель');
      } else if ( personalMovieDB.count > 30){
          alert ('вы киноман');
      } else {
          alert('error');
      }
      },
    rasingFilm : function (){
      let   a,b; 
          for(let i = 0; i<2; i++){
              a=prompt('какой фильм вы уже посотрели');
              b= prompt('Оценка за последний фильм');
          if(a != null && b!=null && a!='' && b !='' && a.length < 50){
              personalMovieDB.movies[a] = b;
              console.log('done');
          }else{
              console.log('error');
              i--;
          }}},
    writeYourGenres : function(){
      for(let i =1; i<2; i++){
        const genr = prompt(`Ваш любимый жанр под номером через запятую`);
        personalMovieDB.genres = genr.split(',');
        if ( genr == '' || genr == null){
          i--;
        }
      }
      personalMovieDB.genres.forEach(function (item,i){
        console.log(`Любимый жанр # ${i +1} - это  ${item}`);
      });
    },
      toggleVisibleMyDB :function(){
        if (personalMovieDB.privat) {
          personalMovieDB.privat =  false;
        } else {
           personalMovieDB.privat = true;
        }
      },
      showMyDB : function (){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    }           
};

// personalMovieDB.askQuantityFilm();
// personalMovieDB.askFilm();
// personalMovieDB.rasingFilm();
// personalMovieDB.writeYourGenres();
//  personalMovieDB.toggleVisibleMyDB();
let reclama = document.querySelectorAll('.promo__adv>img');
reclama.forEach(function (item){
    item.remove();
});
let comed = document.querySelector('.promo__genre');
comed.textContent = "Драмма";
let fon = document.querySelector('.promo__bg');
fon.style.cssText = 'background:url("img/bg.jpg") 0 0/cover no-repeat ';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();
let promoFilm = document.querySelectorAll('.promo__interactive-item');
console.log(promoFilm);
movieDB.movies.forEach(function(item,i){
promoFilm[i].innerHTML =i+1 + ' ' + item;

});


