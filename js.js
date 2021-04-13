/* //alert("Hello, World");

var one = "Hello";

//alert(one); 

let something;
console.log(something);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

//console.log(arr[2]);

//alert("hello, world");
//let answer = confirm("are you here?");
//console.log(answer);

/* let answer = +prompt("are you here?", "yes");
console.log(typeof(answer));

console.log("arr" + "- object") */

let money = prompt("Your money for a month?", ''),
    time = prompt('inptu the date in format yyyy-mm-dd', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("The most important cost", ''),
        b = prompt("How much?", '');

    if ((typeof(a)) === 'string' && (typeof(a) != null && (typeof(b)) != null) &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    };

    appData.moneyPerDay = appData.budget / 30;
    alert(appData.budget / 30);

    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }