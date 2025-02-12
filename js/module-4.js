// ====== Objects {};============ //
console.log("========= МОДУЛЬ 4 ==Objects {};==========");

// const book1 = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };
// задача lms //
console.log("задачка");
// Оголоси змінну apartment і задай ій об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - рядок, що містить шлях до зображення, значення "https://via.placeholder.com/640x480";
// descr - рядок, що містить опис, значення "Spacious apartment in the city center";
// rating - число, що містить рейтинг, значення 4;
// price - число, що містить ціну, значення 2153;
// tags - масив рядків, що містить метаінформацію, значення ["premium", "promoted", "top"].

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };


// ---------------------Вкладені властивості--------------------------------//

// Значенням властивості може бути інший об'єкт.
// Це використовується для зберігання вкладених і згрупованих даних.

const user1 = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// Наприклад, статистика користувача соціальної мережі stats складається з кількості підписників, переглядів і лайків, і зберігати ці дані найзручніше у вигляді об'єкта. Те саме з місцем розташування location, окремо країна і місто.

// У майбутньому це можна буде використовувати для пошуку користувачів за країною, містом, мінімальною або максимальною кількістю підписників тощо.

console.log("задачка");
// задача lms //

// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.
// Додай об'єкту owner наступні властивості:
// name - рядок, що містить ім'я власника, значення "Henry";
// phone - рядок, що містить номер телефону, значення "982-126-1588";
// email - рядок, що містить пошту, значення "henry.carter@aptmail.com"

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

console.log("Доступ до властивостей через крапку . ");

// -----------------Доступ до властивостей через крапку----------------//

// Перший спосіб отримати доступ до властивості об'єкта — це синтаксис objectName.key.

// На місце звернення буде повернуте значення властивості з таким ключем.
// Якщо в об'єкті відсутня властивість з таким ключем, на місце звернення повернеться undefined.

// Здебільшого синтаксис «через крапку» використовується тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined

console.log("задачка");
// задача з lms //
// Об'єкт apartment описує квартиру і має 5 властивостей: шлях до зображення, опис, рейтинг, ціна, теги. Оголошені 4 змінні, значенням яких є значення властивостей об'єкту apartment.

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

const apartment1 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment1.rating;
console.log(aptRating); // 4
const aptDescr = apartment1.descr;
console.log(aptDescr); // "Spacious apartment in the city center"
const aptPrice = apartment1.price;
console.log(aptPrice); // 2153
const aptTags = apartment1.tags;
console.log(aptTags); // "premium", "promoted", "top"


// -------------Доступ до вкладених властивостей-------------//

// Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».


const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};


// !!!!!!! Значення властивості — це вкладений об’єкт!!!!!! //
// Якщо необхідно отримати значення країни користувача, записуємо user.location.country, де:

// user.location — це звернення (шлях) до об'єкта у властивості location,
// user.location.country — звернення до властивості country в цьому об'єкті.

// Тобто «крапка» вказує наступну вкладеність.

const country = user.location.country;
console.log(country); // "Jamaica"


// !!!!!!!!!! Значення властивості — це масив!!!!!!!!! //

// Якщо значення властивості — це масив, то в нашому прикладі вище звернення до цього масиву буде: ****user.hobbies

const hobbies = user.hobbies;
console.log(hobbies); 

// Отримати доступ до !!!!!!!! елементів масиву !!!!!!! можна через квадратні дужки та індекс: user.hobbies[0];

const firstHobby = user.hobbies[2];
console.log(firstHobby); // "swimming"


// Також можна використовувати !!!!!!!! властивості й методи масиву !!!!!!!!, наприклад  !!!!!!! отримати значення його довжини з властивості  !!!!!! length: user.hobbies.length; !!!!!!! //

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

console.log("задачка");
// задачка з lms //
// Об'єкт apartment описує квартиру 6 властивостями: шлях до зображення, опис, рейтинг, ціна, теги і власник. Властивість owner (власник) також є об'єктом. Оголошено шість змінніх, значення яких це значення відповідних властивостей об'єкту apartment.

// Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.



// here i state apartment11 to calm down the console LOLe))) //

const apartment11 = {  
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
console.log(ownerName);
const ownerPhone = apartment.owner.phone;
console.log(ownerPhone);
const ownerEmail = apartment.owner.email;
console.log(ownerEmail);
const numberOfTags = apartment.tags.length;
console.log(numberOfTags);
const firstTag = apartment.tags[0];
console.log(firstTag);
const lastTag = apartment.tags[2];
console.log(lastTag);



console.log("Доступ до властивостей через квадратні дужки[] objectName[”key”]");

// !!!!!!! Доступ до властивостей через квадратні дужки objectName[”key”] !!!!!!!!!! //
// Другий спосіб отримати доступ до властивості об'єкта — це синтаксис objectName[”key”].


// Схоже на звернення до елемента масиву з відмінністю. Відмінність полягає в тому, що в квадратних дужках зазначається не індекс елемента, а рядок з ключем (ім’ям властивості).
// Синтаксис «квадратних дужок» використовується значно рідше. Як правило, у випадках, коли ім'я властивості заздалегідь не відоме або воно зберігається у змінній, наприклад, як значення параметра функції.
// На місце звернення буде повернуто значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.


const book1 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(book.title); // "The Last Kingdom" 
console.log(book["title"]); // "The Last Kingdom" 

console.log(book.genres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(book.propKey); // undefined
console.log(book[propKey]); // "Bernard Cornwell"

console.log(book["isPublic"]);


// У прикладі вище:
// console.log(book.propKey); — це undefined, оскільки в об’єкті book немає властивості з ключем propKey.
// console.log(book[propKey]); — це "Bernard Cornwell", оскільки значенням змінної propKey є рядок “author”, і в об’єкті book є властивість з ключем author, то цей запис поверне значення властивості author).

// задачка з lms //
console.log("задачка");


// Об'єкт apartment описує квартиру з 5 властивостями: шлях до зображення, опис, рейтинг, ціна, теги. Оголошені 4 змінні, значення яких це значення відповідних властивостей об'єкту apartment.
// Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис квадратних дужок.
// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

const flat = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  status: "free",
};

const aptRating1 = flat["rating"];
console.log(aptRating1);
const aptDescr1 = flat["descr"];
console.log(aptDescr);
const aptPrice1 = flat["price"];
console.log(aptPrice);
const aptTags1 = flat["tags"];
console.log(aptTags1);

const aptIsFree = flat["status"];
console.log(aptIsFree);

// -------------------Зміна значення властивостей-------------------- //

// Після того як об'єкт створений, значення його властивостей можна змінити.
// Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.

// ЧЕРЕЗ ТЕ ЩО КОНСОЛЬ МАТЮВАЄТЬСЯ НА ПОВТОР, ДОВОДИТЬСЯ МІНЯТИ НАЗВУ ОБ'ЄКТУ)))//

console.log("ЧЕРЕЗ ТЕ ЩО КОНСОЛЬ МАТЮВАЄТЬСЯ НА ПОВТОР, ДОВОДИТЬСЯ МІНЯТИ НАЗВУ ОБ'ЄКТУ book -> ebook)))");


const ebook = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

ebook.rating = 9;
ebook.isPublic = false;
ebook.genres.push("drama");

console.log(ebook.rating); // 9
console.log(ebook.isPublic); // false
console.log(ebook.genres); // ["historical prose", "adventure", "drama"]


// задачка з lms //
console.log("задачка");

const apartmentt = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
  };

apartmentt.price = 5000;
apartmentt.rating = 4.7;
apartmentt.owner.name = "Henry Sibola";
apartmentt.tags.push("trusted");

console.log(apartmentt.price);
console.log(apartmentt.rating);
console.log(apartmentt.owner.name);
console.log(apartmentt.tags);
console.log(apartmentt.tags.length);


// =============Додавання властивостей================ //

console.log("// ========Додавання властивостей========== //");


// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості.



// Якщо під час запису значення за ключем така властивість відсутня в об'єкті, вона буде створена.



const book11 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "lt"];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "lt"]
console.log(book.price);


// задачка з lms //
console.log("задачка");

// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".
// Зверніть увагу: якщо ви спробуєте додати властивості country і city до ще не створеної властивості location, ви отримаєте помилку. Спочатку ініціалізуйте location як порожній об'єкт, а потім додавайте до нього властивості.

const apartment111 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};


apartment111.area = 60,
apartment111.rooms = 3;
apartment111.location;
apartment111.location = {
  country: "Jamaica",
  city: "Kingston",
};
  
console.log(apartment111.area);
console.log(apartment111.rooms);
console.log(apartment111.location);

// ------Короткі властивості-------//

console.log("---Короткі властивості---");


// Іноді під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, як і сама властивість.

// Синтаксис у наступному прикладі занадто громіздкий, адже доводиться дублювати ім'я властивості та ім'я змінної, в якій зберігається необхідне значення: name: name, і age: age,.



const name11 = "Henry Sibola";
const age11 = 25;

const user11 = {
  name11: name11,
  age11: age11,
};

console.log(user11.name11); // "Henry Sibola"
console.log(user11.age11); // 25


// Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.


const name = "Henry Sibola";
const age = 25;

const user111 = {
  name,
  age,
};

console.log(user111.name); // "Henry Sibola"
console.log(user111.age); // 25



// Замість name: name, використали name.
// А замість age: age, — age.

// Тобто під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.
  
// задачка з lms //
console.log("задачка");

// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.

const name2 = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name2,
  price,
  image,
  tags,
};

console.log(product.name2);
console.log(product.price);
console.log(product.image);
console.log(product.tags);

// Обчислювальні властивості //

console.log("---------Обчислювальні властивості / (computed properties)------------");

// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної або як результат виконання функції.
// Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.



const propName1 = "name";
const user21 = {
  age: 25,
};

user21[propName1] = "Henry Sibola";
console.log(user21.name); // "Henry Sibola"

// Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і в деяких випадках спростити його.
// Значенням обчислювальної властивості може бути будь-який валідний вираз.


const propName = "name";
const user13 = {
  age: 25,
  // ключ цієї властивості буде взято зі значення змінної propName
  [propName1]: "Henry Sibola",
};

console.log(user13.name); // "Henry Sibola"

// задачка з lms //
console.log("задачка");

// Використовуючи синтаксис обчислювальних властивостей, доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, ключі яких зберігаються у змінних emailInputName і passwordInputName.

// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam", 
};

console.log(credentials.email);
console.log(credentials.password);

console.log(" --БЛОК 2--ПЕРЕБІР ОБ'ЄКТА---for...in --------");

// Цикл for...in
// На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of.
// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

// for (key in object) {
//   // інструкції
// }

// Змінна key доступна тільки в тілі циклу.

// На кожній ітерації в неї буде записано значення ключа (ім'я) властивості.
// Для того щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.

const book2 = {
  title2: "The Last Kingdom",
  author2: "Bernard Cornwell",
  genres2: ["historical prose", "adventure"],
  rating2: 8.38,
};

for (const key in book2) {
  console.log(key); // Ключ
  console.log(book2[key]);  // Значення властивості з таким ключем
}

// задачка з lms //
console.log("задачка");

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

const apartment22 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];


// Loop through the apartment object to get keys and values
for (const key in apartment22) {
  keys.push(key);            // Store key in the keys array
  values.push(apartment22[key]); // Store value in the values array
}

// Output keys and values
console.log(keys);      // ["descr", "rating", "price"]
console.log(values);  // ["Spacious apartment in the city center", 4, 2153]

// Метод Object.keys()

console.log("-----Метод-Object.keys(object)-----");

// Вбудований клас Object має кілька корисних методів для роботи з об'єктами.

// Перший з них — це Object.keys(object), який приймає об'єкт і повертає масив ключів його властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.

const book3 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys3 = Object.keys(book3);
console.log(keys3); // ['title', 'author', 'genres', 'rating']

// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.


const book33 = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys33 = Object.keys(book33);

for (const key of keys33) {
  console.log(key); // Ключ
  console.log(book33[key]); // Значення властивості
}


// задачка з lms //
console.log("задачка");

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = apartment;

const apartment13 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values13 = [];
const keys13 = Object.keys(apartment);

for(key of keys) {
  values13.push(apartment[key]);
}

console.log(keys);
console.log(values13);


// Метод Object.values()
console.log("------------ Метод Object.values()  ----------------");




// Якщо метод Object.keys(object) повертає масив імен властивостей об'єкта (тобто ключі), то метод Object.values(object) повертає масив значень його властивостей.



// Якщо в об'єкті відсутні властивості, метод Object.values(object) поверне порожній масив.



const book14 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys14 = Object.keys(book14);
console.log(keys14); // ["title", "author", "rating"]

const values14 = Object.values(book14);
console.log(values14); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

// Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.


// задачка з lms //
console.log("задачка");

const apartment15 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys15 = Object.keys(apartment15);
const values15 = Object.values(apartment15);
console.log (keys15);
console.log(values15);


// задачка з lms //
console.log("задачка");

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:
// Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат

function countTotalSalary(salaries) {
  let totalSalary = 0;

const values = Object.values(salaries);// Object.values(salaries) отримує масив значень зарплат, наприклад [100, 150, 80].

for (const value of values) {
 totalSalary += value       // for...of перебирає кожну зарплату і додає її до totalSalary.
}
  return totalSalary  // Функція повертає підсумкову суму.
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// Як це працює:



// Цей код короткий, ефективний і коректно працює для будь-якого об'єкта із зарплатами. 🚀

// Масив об’єктів //
console.log("// Масив об’єктів //");


// Об'єкти дозволяють згрупувати описові характеристики сутності, наприклад, користувача, книги, автомобіля, шоколадного батончика тощо.



// Для опису групи сутностей використовується масив об'єктів.



// Уяви, що треба описати бібліотеку. Кожна книга — це окремий об’єкт, що містить інформацію про назву, автора, кількість сторінок, рейтинг тощо. Якщо книга — це один об’єкт, то біблотека — це колекція книг, тобто масив об’єктів.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  }
];

//У стандартний набір повсякденних завдань розробника входить маніпуляція масивом однотипних об'єктів. Це означає, що всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.
// Для перебору такого масиву використовується стандартний цикл for...of.

// Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку» (див. тему Об’єкти. Доступ до властивостей через крапку), оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізнятимуться тільки значення. 
console.log("Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку» , оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізнятимуться тільки значення. ");

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for(const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]);
console.log(["244,67,54", "33,150,243", "76,175,80", "255,235,59"]);



// -----------------------Пошук об'єкта за значенням властивості----------------- //
console.log("Пошук об'єкта за значенням властивості");

// Стандартне завдання під час роботи з масивом об'єктів — це пошук об'єкта за значенням властивості. Наприклад, потрібно знайти книгу за її автором. Для цього необхідно:

// перебрати масив у циклі;
// додати умову, виконання якої означатиме успішний результат пошуку.


const books14 = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
	if(book.author === authorToSearchFor) {
		console.log(book);
		console.log(book.title)
		console.log(book.rating)
	}
}



// У прикладі вище цикл for перебирає об'єкти в масиві, доки не знайде той, у якого порівняння значення властивості author і authorToSearchFor поверне true. Щойно об’єкт з необхідним автором знайдено, виконається тіло if, де ми вже можемо працювати зі знайденим об'єктом.

// -----------------------//
console.log("задачка");


function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
 
for(const product of products) {
  if(product.name === productName) {
    return product.price;    
  }
  }
return null;
}


// Покрокова інструкція роботи функції getProductPrice(productName)
// Оголошення функції

// function getProductPrice(productName) {
// Функція приймає один аргумент — productName (назва продукту, ціну якого треба знайти).
// Створення масиву об’єктів products

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// Масив містить список продуктів, кожен з яких має властивості:
// name (назва продукту)
// price (ціна продукту)
// quantity (кількість у наявності)
// Перебір масиву продуктів за допомогою for...of

// for (const product of products) {
// Цикл for...of перебирає кожен об'єкт product у масиві products.
// Перевірка, чи знайдено потрібний продукт

// if (product.name === productName) {
// Порівнює значення product.name із productName (назвою, яку передали у функцію).
// Якщо продукт знайдено — повернення його ціни

//   return product.price;
// Якщо назва збігається, функція повертає price (вартість знайденого продукту).
// Якщо цикл закінчився і продукт не знайдено — повернення null

// return null;
// Якщо жоден продукт не відповідає переданій назві, функція повертає null.
// Приклад виклику:

console.log(getProductPrice("Radar")); // 1300
console.log(getProductPrice("Scanner")); // 2700
console.log(getProductPrice("Unknown")); // null


// Колекція значень властивості

console.log("Колекція значень властивості");

// Типова задача під час роботи з колекцією об'єктів — це отримання масиву всіх значень певної властивості об'єктів. Наприклад, взяти з масиву об'єктів, які описують книги, усі назви або рейтинг.

// Для цього необхідно:

// Створити новий порожній масив для зберігання значень властивостей.
// Перебрати масив об'єктів у циклі.
// На кожній ітерації додати в новий масив значення необхідної властивості.

// Наприклад, отримаємо список назв усіх книг у колекції books.

const books15 = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
];

const titles = [];

// Дізнаємося середній рейтинг усієї нашої колекції.
let totalRating = 0;


for (const book of books15) {
	titles.push(book.title)

  // Для цього треба скласти всі рейтинги
  totalRating += book.rating; 
}

// і розділити отримане значення на кількість книг.

const averageRating = totalRating / books.length;


console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]
console.log(averageRating); // 8
// У результаті вийде масив значень певної властивості з усіх об'єктів.

console.log("задачка");

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  const values = []; // Створюємо масив для збереження значень властивості

  for (const product of products) {
    if (product.hasOwnProperty(propName)) { 
      values.push(product[propName]); // Додаємо значення в масив
    }
  }

  return values; // Повертаємо масив значень
}

console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
console.log(getAllPropValues("category")); // [] (немає такого ключа)


//  Алгоритм розв’язку
// 1️⃣ Створити порожній масив для збереження значень властивостей.
// 2️⃣ Перебрати кожен об'єкт у масиві products.
// 3️⃣ Перевірити, чи містить об'єкт передану властивість propName.
// 4️⃣ Якщо містить — додати її значення в масив результату.
// 5️⃣ Повернути масив значень.

// Детальний розбір роботи функції getAllPropValues(propName):

// 📌 1. Оголошення функції
// javascript
// Copy
// Edit
// function getAllPropValues(propName) {
// Функція приймає один параметр propName – це назва властивості, значення якої ми шукаємо у всіх об'єктах масиву products.
// Викликається як getAllPropValues("name"), getAllPropValues("price") тощо.
// 📌 2. Оголошення масиву об'єктів products
// javascript
// Copy
// Edit
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// Маємо масив об'єктів, де кожен об'єкт представляє товар.
// Кожен об'єкт має три властивості:
// name (назва товару)
// price (ціна товару)
// quantity (кількість одиниць товару)
// 📌 3. Створення порожнього масиву values
// javascript
// Copy
// Edit
// const values = [];
// Цей масив буде містити значення переданої властивості (propName) з усіх об'єктів.
// Якщо, наприклад, викликати getAllPropValues("price"), то сюди будуть записані [1300, 2700, 400, 1200].
// 📌 4. Цикл for...of для перебору products
// javascript
// Copy
// Edit
// for (const product of products) {
// Цикл for...of проходиться по кожному об'єкту (product) у масиві products.
// На кожній ітерації ми отримуємо окремий об'єкт із products, наприклад:
// { name: "Radar", price: 1300, quantity: 4 }
// { name: "Scanner", price: 2700, quantity: 3 }
// { name: "Droid", price: 400, quantity: 7 }
// { name: "Grip", price: 1200, quantity: 9 }
// 📌 5. Перевірка, чи існує propName у поточному об'єкті
// javascript
// Copy
// Edit
// if (product.hasOwnProperty(propName)) {
// Метод hasOwnProperty(propName) перевіряє, чи є в поточному об'єкті product властивість із назвою propName.
// Наприклад, якщо propName === "price", то перевіряється:
// javascript
// Copy
// Edit
// product.hasOwnProperty("price") // true для кожного об'єкта, бо "price" є у всіх
// Якщо властивість існує, переходимо до наступного кроку.
// 📌 6. Додавання значення властивості в масив values
// javascript
// Copy
// Edit
// values.push(product[propName]);
// Якщо властивість propName є в об'єкті, її значення додається в масив values.
// Наприклад, для виклику getAllPropValues("price") цикл працює так:
// product.price → 1300 → додається в values
// product.price → 2700 → додається в values
// product.price → 400 → додається в values
// product.price → 1200 → додається в values
// Після виконання циклу values = [1300, 2700, 400, 1200].
// 📌 7. Повернення масиву values
// javascript
// Copy
// Edit
// return values;
// Після проходження через всі об'єкти у products функція повертає сформований масив values.
// Якщо передана властивість propName не знайдена в жодному об'єкті, то values залишиться порожнім [].
// 🔥 Приклади роботи функції
// javascript
// Copy
// Edit
console.log(getAllPropValues("name"));
// Вихід: ["Radar", "Scanner", "Droid", "Grip"]

console.log(getAllPropValues("price"));
// Вихід: [1300, 2700, 400, 1200]

console.log(getAllPropValues("quantity"));
// Вихід: [4, 3, 7, 9]

console.log(getAllPropValues("category"));
// Вихід: [] (оскільки жоден товар не має властивості "category")

console.log("задачка");

// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.


function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for(const product of products) {                // Цикл for...of перебирає масив і шукає товар із назвою productName.
    if(product.name === productName){
    return product.price * product.quantity;      // Якщо товар знайдено, повертається загальна вартість:
    }
  }
  return `Product ${productName} not found!`      // Якщо товару немає в списку, функція повертає рядок: `Product ${productName} not found!`;    
}

console.log(calculateTotalPrice("Radar")); // 5200 (1300 * 4)
console.log(calculateTotalPrice("Scanner")); // 8100 (2700 * 3)
console.log(calculateTotalPrice("Droid")); // 2800 (400 * 7)
console.log(calculateTotalPrice("Grip")); // 10800 (1200 * 9)
console.log(calculateTotalPrice("Blaster")); // "Product Tablet not found!"


// Ось короткий опис роботи функції calculateTotalPrice(productName):

// 1️⃣ Створюється масив об'єктів products, де кожен товар має name, price і quantity.

// 2️⃣ Цикл for...of перебирає масив і шукає товар із назвою productName.

// 3️⃣ Якщо товар знайдено, повертається загальна вартість:

// return product.price * product.quantity;
// 4️⃣ Якщо товару немає в списку, функція повертає рядок:

// return `Product ${productName} not found!`;

// ------------------Методи об'єкта------------------- //

console.log("------Методи об'єкта------");

// Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних (наприклад, дані про книгу). Об'єкти-сховища зазвичай містяться в масиві таких самих об'єктів. Цей масив є колекцією однотипних елементів.

// А що, якщо нам потрібно створити функції для виконання операцій над масивом даних? Наприклад, додавання або видалення книги. І ці функції мають виконуватися багато разів.



// ❌ Слабкопов'язані, незалежні сутності
// const books = ["The Last Kingdom", "Dream Guardian"];
// function getBooks() {}
// function addBook() {}



console.log("Один із варіантів — оголосити змінну books і дві функції getBooks() і addBook(bookName).");


// Цей спосіб має недоліки. Адже ми маємо три незалежні сутності без явного синтаксичного зв’язку і зі слабким логічним. Є краще рішення.

// Об'єкти можуть зберігати не тільки дані, але й функції для роботи з цими даними. Якщо значення властивості — це функція, така властивість називається методом об'єкта.



// const obj = {
// 	method(value) {
// 		console.log(`I'm a method with ${value}!`);
// 	}
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"


// Метод — це звичайна функція, оголошена як властивість об'єкта (див. приклад вище), а не як окрема змінна (див. перший приклад у розділі).
// Для звернення до методу об'єкта використовується стандартний синтаксис із крапкою.

// Об'єкти, які пов'язують дані та методи для роботи з цими даними, можна назвати «моделями».

// Створимо об’єкт bookShelf для колекції книг books і методів взаємодії з колекцією getBooks і addBook.


// ✅ Логічно й синтаксично згруповані сутності

const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Це метод об'єкта
  getBooks() {
    return "Returning all books";
  },
  // Це метод об'єкта
  addBook(bookName) {
		return `Adding book ${bookName}`;
  },
};

// Виклики методів
bookShelf.getBooks(); // поверне "Returning all books"
bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"

console.log("задачка");

// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.

// Оголоси об'єкт atTheOldToad з наступними властивостями:

// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName

const atTheOldToad = {
  potions: [],
 getPotions() { 
   return "List of all available potions";
 },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion("Invisibility"));
console.log(atTheOldToad.addPotion("Power potion"));
console.log(atTheOldToad.addPotion("Spider networking"));
console.log(atTheOldToad.addPotion("getting bored with LMS")); 

// 🔍 Покрокове пояснення роботи коду
// 1. Створення об'єкта atTheOldToad
// Об'єкт atTheOldToad містить дві основні властивості:

// potions – масив, який слугуватиме сховищем для зіль (зараз порожній []).
// Методи (getPotions() та addPotion(potionName)) для роботи з зіллям.
// 2. Оголошення масиву potions
// javascript
// Copy
// Edit
// potions: [],
// Це порожній масив, у якому будуть зберігатися зілля.
// Зараз він не використовується, але в майбутньому його можна доповнити для реального збереження зіль.
// 3. Метод getPotions()
// javascript
// Copy
// Edit
// getPotions() {
//   return "List of all available potions";
// },
// При виклику atTheOldToad.getPotions() повертає рядок "List of all available potions".
// Зараз цей метод не виводить список зіль із масиву potions, а лише повертає текст.
// 📌 Якщо б ми хотіли отримати реальний список зіль, потрібно було б повертати сам масив potions:

// javascript
// Copy
// Edit
// getPotions() {
//   return this.potions;
// }
// 4. Метод addPotion(potionName)
// javascript
// Copy
// Edit
// addPotion(potionName) {
//   return `Adding ${potionName}`;
// },
// Приймає параметр potionName, тобто назву зілля.
// Повертає рядок "Adding <potionName>", де <potionName> замінюється на реальну назву переданого зілля.
// Наприклад, atTheOldToad.addPotion("Invisibility") поверне "Adding Invisibility".
// 📌 Щоб зберігати зілля в масиві potions, треба змінити цей метод так:

// javascript
// Copy
// Edit
// addPotion(potionName) {
//   this.potions.push(potionName);
//   return `Potion ${potionName} added!`;
// }
// 5. Виклик методів та вивід у консоль
// javascript
// Copy
// Edit
// console.log(atTheOldToad.getPotions()); // "List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility")); // "Adding Invisibility"
// console.log(atTheOldToad.addPotion("Power potion")); // "Adding Power potion"
// console.log(atTheOldToad.getPotions()) виведе "List of all available potions".
// console.log(atTheOldToad.addPotion("Invisibility")) поверне "Adding Invisibility".
// console.log(atTheOldToad.addPotion("Power potion")) поверне "Adding Power potion".

console.log("-----------Доступ до властивостей об'єкта-----------");

// Доступ до властивостей об'єкта

// Методи використовуються для роботи з властивостями об'єкта та їх змінних.

// Для доступу до об'єкта в методі використовується не ім'я змінної цього об’єкта, наприклад bookShelf, а ключове слово this.



// Ключове слово this — це контекст виконання функції.



// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}



// Значенням this буде посилання на об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку — це посилання на об'єкт bookShelf.






// Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку» до властивостей.



const bookShelf66 = {
  books66: ["The Last Kingdom", "The Mist"],
  getBooks() {
    return this.books66;
  }
};

console.log(bookShelf66.getBooks()); // ["The Last Kingdom", "The Mist"]






// Логічно замислитися, чому б не використовувати ім'я об'єкта у зверненні до властивостей?



// Адже ми явно не збираємося його змінювати.



// Справа в тому, що ім'я об'єкта — річ ненадійна. Методи одного об'єкта можна копіювати в інший (з іншим ім'ям), а в майбутньому дізнаємось, що часто при створенні об'єкта ми наперед зовсім не знаємо імені. Використання this гарантує, що метод працює саме з тим об'єктом, який його викликав.

console.log("задачка");

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає рядок "List of all available potions"
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return "List of all available potions";
//   },
// };

const atTheOldToad3 = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
};

console.log(atTheOldToad3.getPotions()); //["Speed potion", "Stone skin"]

// Покрокове пояснення коду:
// Створюється об'єкт atTheOldToad, який представляє магазин зілля.
// В об'єкті є властивість potions, яка містить масив із двох рядків:
// js
// Copy
// Edit
// ["Speed potion", "Stone skin"]
// Це список зілля, яке зараз є в магазині.
// Метод getPotions():
// Використовує this.potions, щоб звернутися до масиву potions усередині об'єкта.
// Повертає сам масив зілля.
// Викликається console.log(atTheOldToad.getPotions());:
// Метод getPotions() виконується і повертає масив.
// console.log() виводить його у консоль.
// Очікуваний результат у консолі:
// js
// Copy
// Edit
//
// Цей код дозволяє отримати список доступного зілля в магазині. Якщо додати нові зілля в potions, метод завжди повертатиме актуальний список.

console.log("---Зміна за посиланням---");

// Зміна за посиланням //



// У властивості books об'єкта bookShelf зберігається масив.

// Отже, ми можемо змінювати масив за посиланням, звертаючись до властивості bookShelf.books, тому що це посилання на масив.

const bookShelf67 = {
  books: ["The Last Kingdom"],
};

bookShelf67.books.push("The Mist");
console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]



// У прикладі нижче в ключовому слові this зберігається посилання на об'єкт, що викликав відповідний метод.

// Під час звернення до this.books усередині методу, ми посилаємось на масив, що зберігається у властивості books. Це означає, що його можна змінювати за посиланням, наприклад, використавши метод масиву push() для додавання нового елемента.



const bookShelf68 = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  }
};

console.log(bookShelf68.getBooks()); // ["The Last Kingdom"]

bookShelf68.addBook("The Mist");
bookShelf68.addBook("Dream Guardian");

console.log(bookShelf68.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]


// При цьому з методу addBook не потрібно нічого повертати, якщо цього не вимагає завдання. Під час його виклику ми просто міняємо значення масиву за посиланням — і елементи масиву у властивості books змінюються.

// У функції getBooks(), this.books означає доступ до властивості books об'єкта bookShelf68. Коли ви викликаєте bookShelf68.getBooks(), this вказує на об'єкт bookShelf68, тому this.books повертає масив книг цього об'єкта.

// У методі addBook(bookName), this.books.push(bookName) додає нову книгу до масиву books об'єкта bookShelf68. Тут також this вказує на об'єкт bookShelf68, що дозволяє змінювати його властивість books.

console.log("задачка");

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості potions - це масив ["Speed potion", "Stone skin"]
// Значення властивості getPotions - це метод об'єкта
// Значення властивості addPotion - це метод об'єкта


const atTheOldToad4 = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};

console.log (atTheOldToad.getPotions());

atTheOldToad.addPotion("Invisibility");

console.log (atTheOldToad.getPotions());

atTheOldToad.addPotion("Power potion")
  
console.log (atTheOldToad.getPotions());


// Виклик методу atTheOldToad.getPotions() повертає поточне значення властивості potions
// Після виклику методу atTheOldToad.addPotion("Invisibility"), у властивості potions буде масив ["Speed potion", "Stone skin", "Invisibility"]
// Після виклику методу atTheOldToad.addPotion("Power potion"), у властивості potions буде масив ["Speed potion", "Stone skin", "Invisibility", "Power potion"]
