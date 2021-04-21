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

let money, time;

function start() {
    money = +prompt("Your money for a month?", '');
    time = prompt('inptu the date in format yyyy-mm-dd', '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Your money for a month?", '');
    }

}
start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("The most important cost", ''),
                b = prompt("How much?", '');

            if ((typeof(a)) === 'string' && (typeof(a) != null && (typeof(b)) != null) &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(appData.budget / 30);
        alert("budget for month " + appData.moneyPerDay + "rub.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("the minimum is!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("it is middle!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("it is hight!");
        } else {
            console.log("errow");
        }
    },
    checkSaving: function() {
        if (appData.savings == true) {
            let save = +prompt("what is the summma of saving?"),
                percent = +prompt("How is procent?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Income for depoxit:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt("what is income? (input with point)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("you input the wrong data");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("something else?"));
            appData.income.sort();
        }

        appData.income.forEach(function(itemmassive, i) {
            alert("mothods of income: " + (i + 1) + " - " + itemmassive);
        });
    }

};

for (let key in appData) {
    console.log("our program include: " + key + " - " + appData[key]);
}