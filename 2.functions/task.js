function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  
  const avg = +(sum / arr.length).toFixed(2);
  
  return {min, max, avg};
}

function summElementsWorker(...arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let evenSum = 0;
  let oddSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  
  return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
  let evenCount = 0;
  let evenSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
      evenSum += arr[i];
    }
  }
  
  const avg = +(evenSum / evenCount).toFixed(2);
  
  return avg;
}

function makeWork (arrOfArr, func) {
  const result = [];
  
  for (let i = 0; i < arrOfArr.length; i++) {
    result.push(func(...arrOfArr[i]));
  }
  
  return result;
}

function makeWork(arrOfArr, func) {
  if (!arrOfArr.length) {
    return 0;
  }
  
  let maxWorkerResult = func(...arrOfArr[0]);
  
  for (let i = 1; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  
  return maxWorkerResult;
}

function summElementsWorker(...args) {
  if (!args.length) {
    return 0;
  }
  
  return args.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...args) {
  if (!args.length) {
    return 0;
  }
  
  const max = Math.max(...args);
  const min = Math.min(...args);
  
  return max - min;
}

function differenceEvenOddWorker(...args) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      sumEvenElement += args[i];
    } else {
      sumOddElement += args[i];
    }
  }
  
  return sumEvenElement - sumOddElement;
}

function makeWork(arrOfArr, func) {
  if (!arrOfArr.length) {
    return 0;
  }
  
  let maxWorkerResult = func(...arrOfArr[0]);
  
  for (let i = 1; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  
  return maxWorkerResult;
}

function summElementsWorker(...args) {
  if (!args.length) {
    return 0;
  }
  
  return args.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...args) {
  if (!args.length) {
    return 0;
  }
  
  const max = Math.max(...args);
  const min = Math.min(...args);
  
  return max - min;
}

function differenceEvenOddWorker(...args) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      sumEvenElement += args[i];
    } else {
      sumOddElement += args[i];
    }
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...args) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      sumEvenElement += args[i];
      countEvenElement++;
    }
  }
  
  if (countEvenElement === 0) {
    return 0;
  }
  
  return sumEvenElement / countEvenElement;
}
