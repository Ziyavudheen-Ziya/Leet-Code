let bills = [5, 5, 10, 10, 20];

let amount = 0;
let fiveCount = 0;
let tenCount = 0;

let isValue = true;

for (i = 0; i < bills.length; i++) {
  if (bills[i] == 5) {
    fiveCount++;
  } else if (bills[i] == 10) {
    if (fiveCount > 0) {
      fiveCount--;
      tenCount++;
    } else {
      isValue = false;
      break;
    }
  } else if (bills[i] == 20) {
    if (tenCount > 0 && fiveCount > 0) {
      tenCount--;
      fiveCount--;
    } else if (fiveCount >= 3) {
      fiveCount -= 3;
    } else {
      isValue = false;
      break;
    }
  }
}

console.log(isValue);
