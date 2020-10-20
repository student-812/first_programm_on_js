"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat:false,
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2;i++){
            const a = prompt('Один из последних просмотренных фильмов?',''),
                  b = prompt('На сколько оцените его?', '');
           
            if (a != "" && a != null && a.length < 50 && b != '' && b != null && !isNaN(b)){
                personalMovieDB.movies[a] = b;
                console.log('done');
            }else{
                console.log('error');
                i--;
            }
        }   
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count != null && personalMovieDB.count != 0){
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30 && personalMovieDB.count != null && personalMovieDB.count != 0){
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30 && personalMovieDB.count != null && personalMovieDB.count != 0){
            alert('Вы киноман');
        } else{
            alert('error');
        }
     },
    showMyDB: function(hidden) {
        if (!hidden){
            console.log(personalMovieDB);
           }
    },
    writeYourGenres: function() {
        for(let i = 1; i<=3; i++){        
            
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre == "" || genre == null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.sort();
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
    },
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?',"");
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?',"");
            
        }
    }
    
};

