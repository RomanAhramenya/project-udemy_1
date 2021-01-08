// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres
// P.S. Функции вызывать не обязательно */


"use strict";
let numberOfFilms;
// function start(){
//     numberOfFilms = +prompt('сколько фильмовы вы уже посмотрели?');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)  ){
//        return start();
//     }
// }
// start();
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

// function askFilm (){
// if (personalMovieDB.count < 10){
//     alert('мало фильмов');
// } else if (personalMovieDB.count >=10 && personalMovieDB.count<=30){
//     alert('вы классный зритель');
// } else if ( personalMovieDB.count > 30){
//     alert ('вы киноман');
// } else {
//     alert('error');
// }
// }
// askFilm();

// let   a,
//       b;

// function rasingFilm(){
//     for(let i = 0; i<2; i++){
//         a=prompt('какой фильм вы уже посотрели');
//         b= prompt('Оценка за последний фильм');
//     if(a != null && b!=null && a!='' && b !='' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }else{
//         console.log('error');
//         i--;
//     }
// }
// }
// rasingFilm();
    
// function showMyDB(){
//     if (personalMovieDB.privat == false){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

function writeYourGenres(){
    for(let i =1; i<=3; i++){
      const genr = prompt(`Ваш любимый жанр под номером ${i}`);
      personalMovieDB.genres[i-1] = genr;
    }
}
writeYourGenres();

