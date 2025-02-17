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
