const btn = document.querySelector('#magic-button'); // отримати елемент через id "#"

console.log(btn);

const unListItem = document.querySelector(".list-item") // отримати елемент за класом "."

console.log(unListItem);

const nav = document.querySelector("ul"); // отримати елемент через тег

const items = document.querySelectorAll(".list-item"); // отримати псевдомасив всіх елементів. це масив посилань. можемо хвба що перебрати, не більше

const navEls = document.querySelectorAll("ul");
console.log(navEls); // коли елемент один а метод має повертати декілька, отримаємо список(масив) з одного елемента

console.log(items);
console.log(Array.isArray(items)); // так перевіряємо, чи справді це масив: Array.isArray // false

console.log(nav);


// властивості навігаціїї по DOM-вузлах


console.log(nav.firstElementChild); // отримаємо перший елемент-дитину бп=атьківського тегу "ul"з класом

console.log(nav.firstChild); // текстова нода



console.log(nav); // кожен стрибок на новий рядок(enter) це поява текстової ноди. в консолі розкирваємо властивість ChildNodes: 7 (4 текстові ноди і 3 li-шки)

console.log(nav.lastElementChild); // отримаємо останній елемент-дитину бп=атьківського тегу "ul"з класом


console.log(nav.children); // ця властивість дасть нам список усіх вкладених дочірніх елементів (псевдомасив лішок)

const ooopsEl = nav.children[1]; // через квадратні дужки дістаємо потрібний нам елемент зі списку. через порядковий номер (index )

console.log(ooopsEl);

console.log(nav.childNodes); // отимаємо список включно з текстовими нодами

console.log(ooopsEl.parentNode); // так можна достукатись до батька.

// тобто ту показана прогулянка від батьковського додочірнього елемента і навпаки. синтаксис [] достукується до портібного нам елемента

// ВЛАСТИВОСТІ ЕЛЕМЕНТА //

const imgEl = document.querySelector(".hero_image");
console.log(imgEl); // маємо доступ до зображення

// можемо тепер ми можемо отримувати дані, що зберігаються в його атрибутах: src, alt, width або перезаписувати їх.

imgEl.src = "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU"; // тут ми присвоїли іміджу і його властивості src нове значення

imgEl.alt = "mountains"; // перезаписали ім'я

console.log(imgEl.src); // маємо доступ до адреси зображення. у звичайний спосіб звернулись до властивості об'єкта

// тепер попрацюємо із зображенням //

const titleEl = document.querySelector(".hero_title");

console.log(titleEl.textContent); // в консолі буде текст нашого елемента: What a wonderful world.

titleEl.textContent = "Hiking camp"; // перезаписуємо текст в елементі h1

console.log(titleEl.textContent);

//=================================//

//  <script src="./js/module-7.js"></script> пишемо або в кінці, щоб завантажився весь HTML, або в head з атрибутом defer =  <script src="./js/module-7.js" defer></script>

//========================//

//=====АТРИБУТИ=====
/* get (ім'я атрибута)
/* set (ім'я атрибута)
/* remove (ім'я атрибута)
/* has (ім'я атрибута)
*/

// окрім взаємодії з атрибутами елементів напряму, як до звичайної властивості об'єкта (imgEl.src, imgEl.alt), через крапку, можна застосувати відповідні методи

// для отримання даних:

console.log(imgEl.getAttribute("src")); // в () як аргумент, передаємо назву атрибуту, який хочемо отримати рядком "src" 
console.log(imgEl.src); // або взаємозамінний спосвб через крапку, звертаємось до властивості нашого елемента

// для запису щось нового в наш атрибут або  присвоєння нового атрибута з новими значеннями:

imgEl.setAttribute("width", 200); // в set.Attribute передаємо 2 аргументи: назва атрибуту, що хочемо змінити, і значення, яке хочемщ туди присвоїти
imgEl.width = 400; // ао аналогії з доступом до властивостей через крапку

// !!!тобто, обираємо зручний для себе спосіб щодо отримання та заміни властивостей атрибутів елемента!!! //

// для видалення - метод "remove" //

// imgEl.removeAttribute("width"); // передаємо назву аторибуту, якийц хочемо видалити (штрина - "width"). отримаємо оригінальний розмір картинки без обмежень по ширині(велике зображення)

// метод "has" перевіряє, чи є атрибут, який передається агрументом в дужки цього метода, у цього елемента

console.log(imgEl.hasAttribute("src")); // повертає "true", якщо такий атрибут є
console.log(imgEl.hasAttribute("href")); // повертає "false", якщо немає

//================== data-атрибути ===============//

// слугують для додавання унікальних атрибутів для елемента, вирізняючи його з решти, тобто для службового використання. закладаємо тут дані, і потім використаю, щоб маніпулювати ними. Синтаксис: data-action(якась довільна назва)="add"((знак присвоєння =) і значення "add")




// звернемось до батьківського елемента "actions" і отримаємо "button"

const actions = document.querySelectorAll(".actions button")
console.log(actions[1].dataset.action); // спробуємо звернутись до елементу під індексом 1 і здобути його data-атрибути. у нього є вдастивість dataset, відкидаємо "data-"  і пишемо назву "action". ми отриамаємо значення "remove", яке зберігається під цим атрибутом

// так само можемо перезаписати значення

actions[0].dataset.action = "lalala"; // для перезапису dataset. назва влістивості "action" і присвоюємо нове значення "lalala"

console.log(actions[1].dataset); // так перевіряємо, які у елемента є дата атрибути (action: "remove")

//===========================================//

//== інтерфейс classlist== взаємодія з класами==//
// add
// remove
// toggle
// replace
// contains
////


const currentPageUrl = "/contact"
const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);

console.log(linkEl);

// як додати до нашого елемента "class"?

linkEl.classList.add("site-nav__link--current"); //  додаємо властиівості до елемента "classList" і "add", як аргумент додаємо сюди назву "class", який хочемо додати до елемента. УВАГА!!! ми у же у властивості класс, тому ми не додаємо крапку при 



    
