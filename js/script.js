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
document.querySelectorAll('.promo__adv>img').forEach(function (item){
  item.remove();
  });
document.querySelector('.promo__genre').textContent = "Драмма";
document.querySelector('.promo__bg').style.cssText = 'background:url("img/bg.jpg") 0 0/cover no-repeat ';





const movieDB = {
  movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
  ]
};
let movieDBArrey = movieDB.movies,
      AddForm = document.querySelector('form.add'),
      promoFilm = document.querySelector('.promo__interactive-list'),
      AddInput = AddForm.querySelector('.adding__input'),
      AddCheck = AddForm.querySelector('[type = "checkbox"]');
  AddForm.addEventListener('submit',(e)=>{
      e.preventDefault();
      let inputVal = AddInput.value;
      let chek = AddCheck.checked;
      if(inputVal.length > 21){
        inputVal=`${inputVal.substring(0,22)}...`;
      }
      if(inputVal){
          movieDBArrey.push(inputVal);
         forEachArray(movieDBArrey,promoFilm);
      }
      if(chek){
        console.log('Ваш любимый фильм добавлен');
      }
     
      Sort(movieDBArrey);
      AddForm.reset();
      console.log(movieDBArrey);
  });

function Sort(arr){
  arr.sort();
}

function forEachArray (Film,node){
  node.innerHTML = "";
  Sort(movieDBArrey);
  Film.forEach(function(item,i){
  node.innerHTML +=`<li class = "promo__interactive-item">${i+1} ${item}
                  <div class = "delete"></div> </li>`;
});
    document.querySelectorAll('.delete').forEach((btn,i)=>{
      btn.addEventListener("click",()=>{
        btn.parentElement.remove();
        movieDBArrey.splice(i,1);
        forEachArray(movieDBArrey,promoFilm);
      });
    });
     
    
}



Sort(movieDBArrey);
forEachArray(movieDBArrey,promoFilm);

});