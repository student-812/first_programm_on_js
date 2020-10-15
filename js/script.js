let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");
        
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};
 
function rememberMyFilms(){
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
}
rememberMyFilms();

//console.log(personalMovieDB);

 function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count != null && personalMovieDB.count != 0){
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30 && personalMovieDB.count != null && personalMovieDB.count != 0){
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30 && personalMovieDB.count != null && personalMovieDB.count != 0){
        alert('Вы киноман');
    } else{
        alert('error');
    }
 }

 detectPersonalLevel();

 function showMyDB(hidden){
     if (!hidden){
         console.log(personalMovieDB);
     }
 }

 showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i<=3; i++){        
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();