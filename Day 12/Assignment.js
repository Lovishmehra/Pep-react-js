const movies = [
    { title: 'Inception', releaseYear: 2010, genre: 'Sci-Fi', rating: 8.8 },
    { title: 'The Dark Knight', releaseYear: 2008, genre: 'Action', rating: 9.0 },
    { title: 'Titanic', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
    { title: 'The Matrix', releaseYear: 1999, genre: 'Sci-Fi', rating: 8.7 },
    { title: 'The Godfather', releaseYear: 1972, genre: 'Crime', rating: 9.2 },
    { title: 'Avatar', releaseYear: 2009, genre: 'Sci-Fi', rating: 7.8 },
    { title: 'The Shawshank Redemption', releaseYear: 1994, genre: 'Drama', rating: 9.3 }
  ];

  
//..............................................Question 1.............................................................
console.log("Answer 1");
let sort_rating = [...movies].sort((a , b) => b.rating - a.rating);
console.log(sort_rating);
console.log("\n");

//.............................................Question 2...............................................................
console.log("Answer 2");
function title_finder(user_title){
    let check = movies.find( (x) => x.title == user_title)
    if(check)
        console.log(check);
    else
        console.log("No match found");
}
title_finder("Avatar");
console.log("\n");

//....................................................Question 3........................................................
console.log("Answer 3");
let greater_rating = movies.filter((x) => x.rating > 8);
console.log(greater_rating);
console.log("\n");

//......................................................Question 4.........................................................
console.log("Answer 4");
let title_array = movies.map( (x) => x.title);
console.log(title_array);
console.log("\n");

//......................................................Question 5.........................................................
console.log("Answer 5");
function Counter(user_genre){
    let count = 0;
    let count__ans = movies.forEach( (x) =>{
       if(x.genre == user_genre)
            count++;
    })
    return count;
 }
let genre = "Sci-Fi";
 console.log(Counter(genre));
 console.log("\n");

//...........................................................Question 6..............................................
console.log("Answer 6");
let movie_rating_above7 = movies.every( (x)=> x.rating > 7 );
console.log("Is every movie having rating above 7: " , movie_rating_above7);
console.log("\n");

//..............................................................Question 7............................................
console.log("Answer 7");
let movie_year_above2000 = movies.filter( (x) => x.releaseYear > 2000 );
console.log(movie_year_above2000);
console.log("\n");