/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', ()=>{
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
const movieDB = {
  movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
  ]
};
let comed = document.querySelector('.promo__genre');
comed.textContent = "Драмма";
let fon = document.querySelector('.promo__bg');
fon.style.cssText = 'background:url("img/bg.jpg") 0 0/cover no-repeat ';
let promoFilm = document.querySelector('.promo__interactive-list');
const getInputAdd = document.querySelector('form.add'),
      getInput =getInputAdd.querySelector('.adding__input'),
      getChecked = getInputAdd.querySelector('[type = "checkbox"]');
const reclama = document.querySelectorAll('.promo__adv>img');
reclama.forEach(function (item){
    item.remove();
});
getInputAdd.addEventListener('submit',(event)=>{
  event.preventDefault();
  const favorite = getChecked.checked;
  let Film = getInput.value;
  if(Film.length > 21){
    Film = `${Film.substring(0,22)}...`;
  } if (favorite){
    console.log('Дбовдляем ваш любимый фильмя');
  } if (Film){
      movieDB.movies.push(Film);
  movieDB.movies.sort();
  createMoaveList(movieDB.movies,promoFilm);
  }

  getInputAdd.reset();
});

movieDB.movies.sort();

function createMoaveList(film,perent){
  perent.innerHTML = '';
  film.sort();
  film.forEach((films,i)=>{
    perent.innerHTML +=`
    <li class="promo__interactive-item">${i + 1} ${films}
      <div class="delete"></div>
    </li>`;
    });
    document.querySelectorAll(".delete").forEach((btn,i)=>{
      btn.addEventListener('click',()=>{
        btn.parentElement.remove();
        movieDB.movies.splice(i,1);
        console.log(movieDB.movies);
        createMoaveList(movieDB.movies,promoFilm);
      });
    });
}
createMoaveList(movieDB.movies,promoFilm);

});