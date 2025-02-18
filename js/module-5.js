// module-5


// ------------------Колбек-функції----------------------- //
// ================ Функція як значення =============== //

// Значення функції (посилання на неї) можна зберігати у змінній або передавати в якості аргументу в іншу функцію. У цьому сенсі функції не відрізняються від чисел, рядків або масивів.

function greet(name) {
  return `Welcome ${name}!`;
}

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet("Mango")); // "Welcome Mango!"

// Виводимо функцію greet у консоль, не викликаючи її
console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// У першому лозі ми викликаємо функцію greet за допомогою круглих дужок, і в консоль виводиться результат її виконання.

// У другому лозі передається посилання на функцію, а не результат її виклику (відсутні круглі дужки), тому в консоль виводиться внутрішнє представлення нашої функції. Це означає, що посилання на функцію можна записати у змінну або передати як аргумент іншій функції.

console.log("задачка");

// Функція makePizza повертає рядок з повідомленням клієнту.

// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result); // Your pizza is being prepared, please wait.
// console.log(pointer); //ƒ makePizza() { return "Your pizza is being prepared, please wait.";}
// console.log(pointer()); //Your pizza is being prepared, please wait.

// makePizza() — функція, яка повертає рядок "Your pizza is being prepared, please wait.".
// const result = makePizza();
// Викликає makePizza() і зберігає її результат (рядок) у змінній result.
// console.log(result); виведе:
// Your pizza is being prepared, please wait.
// const pointer = makePizza;
// Зберігає саму функцію makePizza (не її виклик) у змінній pointer.
// Тепер pointer можна викликати як функцію: pointer().
// console.log(pointer()); також виведе:
// Your pizza is being prepared, please wait.
// 🔹 Різниця:

// makePizza() → викликає функцію й отримує результат.
// makePizza → посилання на саму функцію (може бути передане в інші змінні або викликане пізніше).

// =====================Колбек-функції ===================== //
console.log("/=======Колбек-функції=======/");

// Оголосимо дві функції greet і notify, які приймають ім'я користувача і виводять різні повідомлення.

function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

// Далі оголосимо ще одну функцію registerGuest, яка прийматиме два параметри.

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

// name — ім’я користувача
// callback — посилання на функцію, яку треба викликати в тілі registerGuest і передати їй ім'я користувача

// Тепер використовуємо оголошені функції під час виклику registerGuest.

function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest("Mango", greet); // "Registering Mango!"
// "Welcome Mango!"

registerGuest("Mango", notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"

// Ми передаємо посилання на функцію greet або notify як аргумент, тому вони будуть присвоєні в параметр callback і викликані всередині функції registerGuest за допомогою круглих дужок.
// Функція зворотного виклику (callback, колбек) — це функція, яка передається іншій функції як аргумент, а та у свою чергу використовує передану функцію.

// У прикладі функції greet і notify — це колбек-функції, тому що ми передаємо їх як аргумент у функцію registerGuest. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.

// Функція вищого порядку (higher order function) — функція, яка приймає в якості параметрів інші функції або повертає функцію в якості результату.

// У прикладі це функція registerGuest, тому що вона очікує іншу функцію як параметр і викликає її.
console.log('//====================================================//');
console.log("задачка");

// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала результат її виклику. Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Vulkano", makePizza));
// console.log(makeMessage("Messicana", deliverPizza));

// У цьому коді є три функції:

// deliverPizza(pizzaName)

// Приймає ім'я піци pizzaName
// Повертає рядок: "Delivering <назва піци> pizza."
// makePizza(pizzaName)

// Приймає ім'я піци pizzaName
// Повертає рядок: "Pizza <назва піци> is being prepared, please wait..."
// makeMessage(pizzaName, callback)

// Приймає два параметри:
// pizzaName — назва піци
// callback — функція, яка буде виконана
// Викликає цю колбек-функцію та передає їй pizzaName, тобто:

// return callback(pizzaName);
// Таким чином, makeMessage може використовувати як makePizza, так і deliverPizza

// 2️⃣ Приклад використання

// console.log(makeMessage("Margherita", makePizza));
// 🔹 makeMessage("Margherita", makePizza) викличе makePizza("Margherita"), тому результат:

// Pizza Margherita is being prepared, please wait...

// console.log(makeMessage("Pepperoni", deliverPizza));
// 🔹 makeMessage("Pepperoni", deliverPizza) викличе deliverPizza("Pepperoni"), тому результат:

// Delivering Pepperoni pizza.
// Висновок
// Функція makeMessage приймає іншу функцію як аргумент і виконує її — це і є колбек-функція.
// Завдяки цьому код стає гнучкішим і дозволяє легко змінювати поведінку, просто передаючи різні функції.

// -----------------Інлайн-колбеки----------------//

console.log("=============Інлайн-колбеки=================");

// Якщо колбек-функція маленька і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Такі функції називаються інлайн-колбеки. Вони будуть доступні тільки в якості значення параметра і більше ніде в коді.

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

// Передаємо інлайн-функцію greet у якості колбека
registerGuest("Mango", function greet(name) {
  console.log(`Welcome ${name}!`);
});

// Передаємо інлайн-функцію notify у якості колбека
registerGuest("Poly", function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});

console.log("задачка");

// Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.

// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName). Колбек eatPizza логує рядок "Eating pizza <назва піци>", де <назва піци> це значення параметра pizzaName.

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

console.log(
  "Код демонструє використання callback-функцій. makePizza приймає назву піци та функцію, яку викликає після приготування. Використання різних callback-функцій (deliverPizza і eatPizza) дозволяє виконувати різні дії після приготування піци. Це приклад асинхронного програмування в JavaScript."
);
console.log('//====================================================//');
console.log("задачка");

// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (number) {
    totalPrice += number;
  });

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([15, 30, 45, 60, 75, 90]));

// Оголошення змінної totalPrice

// Вона спочатку дорівнює 0 і буде використовуватися для підрахунку загальної суми.
// Використання forEach

// Метод forEach перебирає кожен елемент масиву orderedItems.
// У кожній ітерації анонімна callback-функція отримує number (поточний елемент).
// Додає значення number до totalPrice.
// Повернення результату

// Після завершення циклу функція повертає totalPrice, що містить суму всіх елементів масиву.
console.log('//====================================================//');
console.log('задачка');

// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено, функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

function filterArray(numbers, value) {
  let newArray = [];

  numbers.forEach(function (number) {
    if(number > value) {
      newArray.push(number);
    }
    
  });
                  return newArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38));// [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24,41,76]

// Функція filterArray приймає два параметри:

// numbers – масив чисел.
// value – число, з яким порівнюються елементи масиву.
// Як працює функція?
// Оголошує порожній масив newArray – у нього будуть додаватися числа, які більше за value.
// Перебирає масив numbers за допомогою forEach.
// Кожен елемент number порівнюється з value.
// Якщо number > value, він додається в newArray через push.
//

// Стрілочні функції
// Стрілочні функції: синтаксис

console.log('=======Стрілочні функції Стрілочні функції: синтаксис============');
// Стрілочні функції (сленг — “стрілки”) мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька або якщо вона використовується як колбек.

// Усі стрілки створюються як функціональний вираз, і їх необхідно присвоювати змінній.

// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Те саме стрілочною функцією
const arrowAdd = (a, b, c) => {
  return a + b + c;
};



// Ключове слово function не використовується
// Одразу зазначається оголошення параметрів
// Після параметрів використовується символ => і тіло функції у фігурних дужках


// Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками рівності = і стрілкою =>.



// const add1 = (a, b, c) => {
//   return a + b + c;
// };


// Якщо параметр один, його можна оголошувати без круглих дужок.

// const add = a => {
//   return a + 5;
// };

// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

// const greet = () => {
//   console.log("Hello!");
// };

// Неявне повернення
console.log('============явне і неявне повернення=================');



// У стрілочної функції після символу => знаходиться її тіло. Існує два способи запису: з фігурними дужками і без них.
// Запис із фігурними дужками
console.log('Запис із фігурними дужками');

// Якщо є фігурні дужки і функція повинна повертати якесь значення, необхідно явно поставити return. Це називається явне повернення (explicit return).



// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };



// Такий синтаксис використовується в тому випадку, якщо в тілі функції потрібно виконати ще якісь інструкції, окрім повернення значення.



// Запис без фігурних дужок
console.log('Запис без фігурних дужок');



// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. Це називається неявне повернення (implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.



// const add = (a, b, c) => a + b + c;



// Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з тілом і виразом, що повертається. Тим не менш, він доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, окрім повернення значення.



// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Після
// const arrowAdd = (a, b, c) => a + b + c;

console.log('задачка');

// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Також заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметром (orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//=================================================================//
// // умова //
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }


// //=================================================================//
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }


//======================================================================//

// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

//====================================================================//

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

console.log('//=============// Методи map і flatMap //==============//');
console.log('//===============//Чисті функції //==================//');



// Методи map і flatMap
// Чисті функції



// Функція з побічними ефектами — це функція, яка в процесі виконання може:



// змінювати або використовувати глобальні змінні
// змінювати значення аргументів посилального типу
// виконувати операції введення-виведення тощо


// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]



// Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value. Вона змінює (мутує) вихідний масив за посиланням.



// Чиста функція (pure function) — це функція, результат якої залежить тільки від значень переданих аргументів. За умови однакових аргументів вона завжди повертає один і той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.



// Напишемо реалізацію чистої функції множення елементів масиву, що повертає новий масив, не змінюючи вихідний.



// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]


console.log('Перебираючі методи');
// Перебираючі методи



// У JavaScript є методи масивів, які прийшли з функціональних мов. Більшість із перебираючих методів масивів — це чисті функції. Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.



// Усі перебираючі методи масивів мають схожий синтаксис. На вихідному масиві array викликається перебираючий метод method , у який аргументом передається колбек-функція callback .



// array.method(callback(currentValue, index, array))



// У більшості методів колбек-функції, які є їхнім аргументом, отримують три наступні параметри:



// першим параметром буде значення поточного елемента масиву currentValue
// другим параметром буде індекс поточного елемента масиву index
// третім параметром буде посилання на сам вихідний масив array


// array.method((item, idx, arr) => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });



// Усі параметри, окрім значення поточного елемента масиву item, необов'язкові. Назви параметрів можуть бути будь-які, головне, щоб вони були зрозумілі тобі та іншим розробникам.



// array.method(item => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });


// Яким по порядку параметром буде в колбек-функції лічильник (індекс) поточної ітерації?

// Першим
// Другим
// Третім
// Результат

// Саме так! Лічильник буде у другому параметрі.

// Метод map()
console.log('-----------------Метод map()--------------------');

// console.log('//------------------Метод map()---------------------//');


// Більшість перебираючих методів масиву — це чисті функції. Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.



// Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив, який і буде результатом виконання методу.

console.log('Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив, який і буде результатом виконання методу.');


// array.map((element, index, array) => {
//   // Тіло колбек-функції
// });



// Поелементно перебирає оригінальний масив
// Не змінює оригінальний масив
// Результат роботи колбек-функції записується в новий масив
// Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований


// Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.
console.log('Поелементно перебирає оригінальний масив. Не змінює оригінальний масив. Результат роботи колбек-функції записується в новий масив. Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований. Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.');



const planets1 = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]



// Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення колбек-функції, що робить код чистішим і простішим для сприйняття.

// Що повертає метод map(callback)?

// Масив
// Об’єкт
// Довільне значення
// Результат

// Правильно! Метод map(callback) повертає новий масив, що буде складатися з результатів роботи колбек-функції для кожного елемента вихідного масиву.

// Масив якої довжини повертає метод map(callback)?

// На одиницю менше за довжину масиву, до якого він був застосований
// Завжди такої самої, як і в масиву, до якого він був застосований
// Довільної довжини, залежить від розробника
// Результат

// Абсолютно точно! Метод map(callback)повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований.

// Метод map змінює масив до якого застосовується?

// Так
// Ні
// Результат

// Чудово! Метод map не змінює оригінальний масив.


console.log('autocheck');

// В масиві planets зберігаються назви планет. Доповни код таким чином, щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин назв кожної планети з масиву planets. Обов'язково використовуй метод map().

// Оголошена змінна planets
// Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// Оголошена змінна planetsLengths
// Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// Для перебирання масиву планет використаний метод map()


const planets2 = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets2.map(planet => planet.length);


console.log(planetsLengths);
console.log(planets2);

console.log('//====================================================//');
console.log('autocheck');

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг (властивість title) з масиву books.

// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна titles
// Значення змінної titles - це масив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебирання масиву books використовується метод map() як чиста функція

const books17 = [
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
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles17 = books.map(books => books.title);
console.log('const titles17 = books.map(books => books.title);');

console.log(titles17);


console.log('-----------------Метод map()--------------------');

// Метод flatMap()

// Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках, коли результат — це багатовимірний масив, який необхідно «розгладити».

// array.flatMap((element, index, array) => {
//   // Тіло колбек-функції
// });

// У масиві students зберігається колекція студентів зі списком предметів, які відвідує студент у властивості courses. Кілька студентів можуть відвідувати один і той самий предмет. Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що навіть повторюваних.

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];


console.log('const mappedCourses = students.map(student => student.courses); console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]');

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

console.log('const flattenedCourses = students.flatMap(student => student.courses); console.log(flattenedCourses)  ["mathematics", "physics", "science", "mathematics", "physics", "biology"];');


// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// Метод flatMap викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив. Відмінність від map() полягає в тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений (плоский) масив і є результатом роботи flatMap().
console.log('//====================================================//');

console.log('autocheck');

const books18 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books18.flatMap(book => book.genres);

console.log(genres);

//==========================================================//
console.log('//====================================================//');

console.log('autocheck');

// Доповни стрілочну функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserEmails
// Змінній getUserEmails присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]



const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserEmails = (users) => users.map(huuser => huuser.email);

console.log(getUserEmails(users));

console.log('Ти використовуєш users як параметр колбек-функції всередині map. Це може спричинити плутанину, оскільки параметр функції вже називається users. Більш коректний варіант:huuser - довільна назва, аби леше не збігалась з властивістю масиву');
