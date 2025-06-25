let n = 70,
  logs = [
    [36, 3],
    [1, 5],
    [12, 8],
    [25, 9],
    [53, 11],
    [29, 12],
    [52, 14],
  ];

let checkTime = [];

for (let i = 0; i < logs.length; i++) {
  let [id, leavingTime] = logs[i];

  if (i == 0) {
    checkTime.push([id, Math.abs(i - leavingTime)]);
  } else {
    checkTime.push([id, Math.abs(leavingTime - logs[i - 1][1])]);
  }
}
checkTime[0][1] = logs[0][1] - 0;

let l = 0;
let employeeId = Infinity;

console.log(checkTime);

for (let i = 0; i < checkTime.length; i++) {
  let [id, time] = checkTime[i];

  if (time > l || (time === l && id < employeeId)) {
    l = time;
    employeeId = id;
  }
}

console.log(employeeId);
