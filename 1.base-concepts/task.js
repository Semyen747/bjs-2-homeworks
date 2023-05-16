"use strict";

function solveEquation(a, b, c) {
  let arr = [];  
  let d = (b ** 2) - (4 * a * c);
	if (d < 0) {
		arr.push();
	} else if (d == 0) {		
		let oneRoot = -b / (2 * a);
			arr.push(oneRoot);
	} else if (d > 0) {
		let firstRoot = (-b + Math.sqrt(d))/(2 * a);
		let secondRoot = (-b - Math.sqrt(d))/(2 * a);
			arr.push(firstRoot, secondRoot);		  		
	} 
  return arr; 
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent !== 'number' || percent < 0 || percent > 100) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  }
  if (typeof contribution !== 'number' || contribution < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
  }
  if (typeof amount !== 'number' || amount < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
  }
  if (typeof countMonths !== 'number' || countMonths < 0) {
    return `Параметр "Срок ипотеки" содержит неправильное значение ${countMonths}`;
  }

  const monthlyPercent = percent / 100 / 12;
  const bodyCredit = amount - contribution;
  const monthlyPayment = bodyCredit * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent)**countMonths - 1));
  const totalAmount = Number((monthlyPayment * countMonths).toFixed(2));

  return totalAmount;
}