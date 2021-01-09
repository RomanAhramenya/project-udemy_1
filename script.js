/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


"use strict";
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
 personalMovieDB.writeYourGenres();
//  personalMovieDB.toggleVisibleMyDB();







