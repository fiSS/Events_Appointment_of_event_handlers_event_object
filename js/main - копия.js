'use strict';
let startBtn = document.getElementById('start'), //Получить кнопку "Начать расчет" через id
budgetValue = document.getElementsByClassName('budget-value')[0],
dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
levelValue = document.getElementsByClassName('level-value')[0],
expensesValue = document.getElementsByClassName('expenses-value')[0],
optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue = document.getElementsByClassName('income-value')[0],
monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearsavingsValue = document.getElementsByClassName('yearsaving-value')[0],


// chooseExpenses = document.getElementsByClassName('expenses-item'), //Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
// expensesBtn = document.getElementsByTagName('button')[0], // Получить кнопки “Утвердить”  через Tag, каждую в своей переменной. 

expensesItem = document.getElementsByClassName('expenses-item'),
expensesBtn = document.getElementsByTagName('button')[0],
optionalExpensesBtn = document.getElementsByTagName('button')[1],
countBtn = document.getElementsByTagName('button')[2],
optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
incomeItem = document.querySelector('choose-income'),
checksavings = document.querySelector('#savings'),
sumValue = document.querySelector('.choose-sum'),
percentValue = document.querySelector('.choose-percent'),
yearValue = document.querySelector('year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');
console.log(expensesValue);

let money, time;


startBtn.addEventListener('click', function() {
    time = +prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');
    while (isNaN(money) || money == "" || money ==null){ //isNaN возвращаент true когда туда попадают не цифры
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.Budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    //yearValue.value = new Date(Date.parse(time)).getFullYear(); не работает выдает ОШИБКУ !!!!!!
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

//не работает! Статья возможных доходов
// incomeItem.addEventListener('change', function() {
//     let items = incomeItem.value;
//     appData.income = items.split(', ');
//     incomeValue.textContent = appData.income;
// });

let appData = {
    Budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: true,
    chooseExpenses: function() {
    
    },
    
    chooseIncome: function() {
      
    
}, 

        
    
    
    detectDayBudget: function () {
        
        alert("ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        },
    checkSavings: function () {
        if (appData.saving == true) {
                let save = +prompt('какова сумма накоплений?'),
                    percent = +prompt('под какой процент?');  
                appData.monthIncome = save/100/12*percent;
                alert ('доход в месяц с вашего депозита:' + appData.monthIncome);   
                
           }  
    },
    chooseOptExpenses: function () {
    
    },

    
    
};
for (let key in appData){
    console.log("наша программа включает в себя", key);
}


