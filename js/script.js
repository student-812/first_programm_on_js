const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

let a,b;

 for (let i =0; i<=1; i++){
    a = prompt('Один из последних просмотренных фильмов?','');
   
    if (a == ""|| a == null)
    {
        while(a == ""|| a == null){
        a = prompt('Ошибка. Введите название фильма.', '');
            if(a.length>50){
                while (a.length>50){
                    a = prompt('Ошибка. Введите название как-нибудь покороче.', '');
                }
            }
         }
    } else if(a.length>50){
        while (a.length>50){
        a = prompt('Ошибка. Введите название как-нибудь покороче.', '');
    }
        if (a == ""|| a == null){
            while(a == ""|| a == null){
            a = prompt('Ошибка. Введите название фильма.', '');
            }
        }   
    }
    b = prompt('На сколько оцените его?', '');
    if (b == ""|| b == null)
    {
        while(b == ""|| b == null){
        b = prompt('Ошибка. Оцените фильм.', '');
            if(b>100){
                while (b>100){
                    b = prompt('Ошибка. Дайте более объективную оценку.', '');
                }
            }
         }
    } else if(b>100){
        while (b>100){
            b = prompt('Ошибка. Дайте более объективную оценку.', '');
    }
        if (b == ""|| b == null){
            while(b == ""|| b == null){
                b = prompt('Ошибка. Оцените фильм.', '');
            }
        }   
    }
    personalMovieDB.movies[a] = b;
 }  

console.log(personalMovieDB);
 if (personalMovieDB.count < 10 && personalMovieDB.count != null && personalMovieDB.count != 0){
     alert('Просмотрено довольно мало фильмов');
 } else if (personalMovieDB.count < 30 && personalMovieDB.count != null && personalMovieDB.count != 0){
     alert('Вы классический зритель');
 } else if (personalMovieDB.count > 30 && personalMovieDB.count != null && personalMovieDB.count != 0){
     alert('Вы киноман');
 } else{
     alert('error');
 }