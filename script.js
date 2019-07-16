let money = prompt("Ваш бюджет на месяц","");
//let time = prompt("Введите дату в формате YYYY-MM-DD","");

console.log(money);
//console.log(time);

let appData = {
    budget: money,
    //timeData: time,
    optionalExpenses: "",
    income:"",
    savings:false,
    expenses: {
       reqSt: prompt("Введите обязательную статью расходов в этом месяце",""),
       smSt: prompt("Во сколько обойдется?","")
    }
};

alert("Бюджет на 1 день =" + money/30);
console.log(appData.expenses);

  /*  appData.expenses = {
        prompt("Введите обязательную статью расходов в этом месяце","") : prompt("Во сколько обойдется?",""),
        prompt("Введите обязательную статью расходов в этом месяце","") : prompt("Во сколько обойдется?","")
    };

*/


