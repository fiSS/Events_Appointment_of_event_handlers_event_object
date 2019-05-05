1. Если программа еще не запущена( не нажата кнопа "Начать расчет") или нужное(соответственное) для заполнения поле пустое - сделал кнопки неактивными:
if (inputValue[0] !== '' && (inputValue[1] !== '' && inputValue[2] !== '' && inputValue[3] !== '')){
          expensesBtn.disabled = false;
      }
      else {
          expensesBtn.disabled = true;
      }

3) Реализовал функционал: при расчете дневного бюджета учитываю сумму обязательных трат: appData.moneyPerDay = ((appData.Budget-expenses)/30).toFixed();
