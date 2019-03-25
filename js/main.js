'use strict';
let startBtn = document.getElementById('start'), //Получить кнопку "Начать расчет" через id
budgetValue = document.getElementsByClassName('budget-value')[0],
dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
levelValue = document.getElementsByClassName('level-value')[0],
expensesValue = document.getElementsByClassName('expenses-value')[0],
optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue = document.getElementsByClassName('income-value')[0],
monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


// chooseExpenses = document.getElementsByClassName('expenses-item'), //Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
// expensesBtn = document.getElementsByTagName('button')[0], // Получить кнопки “Утвердить”  через Tag, каждую в своей переменной. 

expensesItem = document.getElementsByClassName('expenses-item'),
expensesBtn = document.getElementsByTagName('button')[0],
optionalExpensesBtn = document.getElementsByTagName('button')[1],
countBtn = document.getElementsByTagName('button')[2],
optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
incomeItem = document.querySelector('.choose-income'),
checkSavings = document.querySelector('#savings'),
sumValue = document.querySelector('.choose-sum'),
percentValue = document.querySelector('.choose-percent'),
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');
console.log(yearSavingsValue);

let money, time;


startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');
    while (isNaN(money) || money == "" || money ==null){ //isNaN возвращаент true когда туда попадают не цифры
        money = +prompt("Ваш бюджет?", '');
    }
    appData.Budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear(); //не работает выдает ОШИБКУ !!!!!!
    //обрабатывает время, превратит в к-во милисекунд что прошло с 1970 г., потом данные который мы получили используются для создания новой даты
    //еслм мы работаем с input-ами то мы используем value а не textContent
    monthValue.value = new Date(Date.parse(time)).getMonth() +1; //+1 так счёт начинается с 0 
    dayValue.value = new Date(Date.parse(time)).getDate(); //получим день текущего месяца
});



expensesBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) { //.length получим колличество елеметов в етом псевдо массиве, будет работать пока не закончатся инпуты
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
&& a != '' && b != '' && a.length < 50) { 
        console.log('done');
        appData.expenses[a] = b;
        sum += +b;
}     else {
     i=i-1;
  } 
} 
expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] +  ' ';

}
});

countBtn.addEventListener('click', function(){

    if(appData.Budget != undefined){
        appData.moneyPerDay = (appData.Budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = 'минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent =  'средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = 'высокий уровень достатка';
    } else {
        levelValue.textContent = "произошла ошибка";
    } 
    }else {
        dayBudgetValue.textContent = "произошла ошибка";
    
}
});

// Статья возможных доходов
incomeItem.addEventListener('input', function() { //input отображается сразу на странице, change проявляется после того как кликаем за пределами строки ввода
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

//Есть ли накопления
checkSavings.addEventListener('click', function() {
    if(appData.savings == true) {
       appData.savings = false;
    } else {
        appData.savings = true;
    }

});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;
    
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    Budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false, 
    
      
    
};
for (let key in appData){
    console.log("наша программа включает в себя", key);
}

