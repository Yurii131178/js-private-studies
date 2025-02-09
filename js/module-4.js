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