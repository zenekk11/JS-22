// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let music = ['blues', 'classical', 'disco', 'folk', 'hip-hop', 'jazz', 'metal', 'pop', 'reggae', 'rock'];
console.log(music[0]);
console.log(music[1]);
console.log(music[2]);
console.log(music[3]);
console.log(music[4]);
console.log(music[5]);
console.log(music[6]);
console.log(music[7]);
console.log(music[8]);
console.log(music[9]);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books1 = {title: 'HarryPotter', pageCount: 432, genre: 'fantasy'};
console.log(books1);
let books2 = {title: 'Dune', pageCount: 656, genre: 'sci-fi'};
console.log(books2);
let books3 = {title: 'TheOutsider', pageCount: 592, genre: 'mystery'};
console.log(books3);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let books = [
    {title: 'HarryPotter', pageCount: 432, genre: 'fantasy'},
    {title: 'Dune', pageCount: 656, genre: 'sci-fi'},
    {title: 'TheOutsider', pageCount: 592, genre: 'mystery'},
    {authors: [
            {name: 'J. K. Rowling', age: 56},
            {name: 'Frank Herbert', age: 66},
            {name: 'Stephen Edwin King', age: 74}
        ]}
]
console.log(books);



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user = [
    {name: 'ob1', username: 'admin1', password: '_$vh2ec243'},
    {name: 'ob2', username: 'admin2', password: 165351},
    {name: 'ob3', username: 'admin3', password: 967942},
    {name: 'ob4', username: 'admin4', password: 34634},
    {name: 'ob5', username: 'admin5', password: '3b&v62v8'},
    {name: 'ob6', username: 'admin6', password: 347486},
    {name: 'ob7', username: 'admin7', password: 141241},
    {name: 'ob8', username: 'admin8', password: 61468},
    {name: 'ob9', username: 'admin9', password: 'b3vt82@36'},
    {name: 'ob10', username: 'admin10', password: 93563}
    ];

    console.log(user[0].password);
    console.log(user[1].password);
    console.log(user[2].password);
    console.log(user[3].password);
    console.log(user[4].password);
    console.log(user[5].password);
    console.log(user[6].password);
    console.log(user[7].password);
    console.log(user[8].password);
    console.log(user[9].password);
