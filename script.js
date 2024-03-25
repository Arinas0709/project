"use strict";
// const numberOfFilms= +prompt("Сколько фильмов вы уже посмотрели?","");
// const personalMovieDB={
//       count:numberOfFilms,
//      movies:{},
//      actors:{},
//      genres:[],
//      private:false

// };

// const a= prompt("Один из последних просмотренных фильмов?",""),
//       b= prompt("На сколько оцените его?",""),
//       c= prompt("Один из последних просмотренных фильмов?",""),
//       d= prompt("На сколько оцените его?","");
// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;
// console.log(personalMovieDB);

// if (4==9){
//     console.log("Ok!");
// }else{
//     console.log("Error!");
// }
// const num=50;
// if(num<49){
//     console.log("Error!")
// }else if (num>100){
//     console.log("Много");
// }else{
//     console.log("ОК!");
// }
// (num==50)?console.log("ОК!"):console.log("Error!");

// const num=50;
// switch (num){
//   case(49):
//   console.log("Неверно");
//   break;
//   case(100):
//   console.log("Неверно");
//   break;
//   case(50):
//   console.log("верно");
//   break;
//   default:
//     console.log("Не в этот раз");
//     break;
// }


// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );


// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let num = 50;
// // while (num<55){
// //     console.log(num);
// //     num++;
// // }

// for (let i=1;i<8;i++){
//     console.log(num);
//     num++;
// }

// for (let i=0;i<3;i++) {
//     console.log(i);
//     for (let j=0;j<3;j++){
//         console.log(j);
//     }
// }

// let result ='';
// const lenght = 7;
// for (let i=1;i<lenght;i++){
//     for (let j=0;j<i;j++){
//        result+='*';
//     }
//     result+='\n';
// }
// console.log(result);

// }
    
    
// }


// function secondTask() {
//     for (let i=21;i>9;i--){
//         if (i===13) break;
//         console.log(i);
//     }
// }

// }
    
    
// }

// // Место для второй задачи
// function secondTask() {
//     for (let i=21;i>9;i--){
//         if (i===13) break;
//         console.log(i);
//     }
// }
//Автоматизировать вопросы пользователю про фильмы при помощи цикла
//  const numberOfFilms= +prompt("Сколько фильмов вы уже посмотрели?","");
//  const personalMovieDB={
//      count:numberOfFilms,
//      movies:{},
//      actors:{},
//      genres:[],
//      private:false
//     };
// for (let i=0;i<2;i++){
//     const a= prompt("Один из последних просмотренных фильмов?",""),
//           b= prompt("На сколько оцените его?","");

//           personalMovieDB.movies[a]=b;    
// }
// console.log(personalMovieDB);
//Сделать так, чтобы пользователь не смог оставить ответ в виде пустой строки, отменить ответ или ввести названия фильма длинее, чем 50 символов
//если так происходит- возвращаем пользователя к вопросам опять
// const numberOfFilms= +prompt("Сколько фильмов вы уже посмотрели?","");
//  const personalMovieDB={
//      count:numberOfFilms,
//      movies:{},
//      actors:{},
//      genres:[],
//      private:false
//     };
// for (let i=0;i<2;i++){
//     const a= prompt("Один из последних просмотренных фильмов?",""),
//           b= prompt("На сколько оцените его?","");

//           if (a!=null && b!=null && a!=''&& b!=''&& a.length<50){
//             personalMovieDB.movies[a]=b;   
//             console.log('done!');
//           } else{
//             console.log('Error');
//             i--;
//           }


 
// }
// console.log(personalMovieDB);

//При помощи условий проверить personalMovieDB, и если он меньше 10 вывести сообщение "Просмотрено довольно мало фильмов", если от 10 до 30 то "Вы классический зритель", если больше, то вы киноман А если не подошло к вариантам, то ошибка 
// const numberOfFilms= +prompt("Сколько фильмов вы уже посмотрели?","");
//  const personalMovieDB={
//      count:numberOfFilms,
//      movies:{},
//      actors:{},
//      genres:[],
//      private:false
//     };
// for (let i=0;i<2;i++){
//     const a= prompt("Один из последних просмотренных фильмов?",""),
//           b= prompt("На сколько оцените его?","");

//           if (a!=null && b!=null && a!=''&& b!=''&& a.length<50){
//             personalMovieDB.movies[a]=b;   
//             console.log('done!');
//           } else{
//             console.log('Error');
//             i--;
//           }


 
// }
// if (personalMovieDB.count<10){
//     console.log("Просмотрено довольно мало фильмов");
// }else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
//      console.log("Вы классический зритель");
// }else if(personalMovieDB.count>=30){
//     console.log("Вы киноман");
// } else{
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);
// function showFirstMessange (text){
//     console.log(text);
// }
// showFirstMessange("Hello World!");

// function calc(a,b){
//     return(a+b);
// }
// console.log(calc(10,30));
// console.log(calc(17,34));

// function ret(){
//     let num =50;

//     return num;
// }
// const Anotherret=ret();
// console.log(Anotherret);

// const str="test";
// console.log(str.length);
// const logg="kkkkkkkkolla";
// console.log(logg.slice(7,12));

// const num =12.2;
// console.log(Math.round(num));

let numberOfFilms;
function start(){
    numberOfFilms =+prompt("Сколько фильмов вы уже посмотрели?","");
    while(numberOfFilms=='' || numberOfFilms==null || isNaN){
        numberOfFilms =+prompt("Сколько фильмов вы уже посмотрели?","");
    }
}
start();