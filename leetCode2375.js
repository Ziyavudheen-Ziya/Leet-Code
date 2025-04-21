let pattern = "IIIDIDDD";

const stack = [];

const result = [];

let num = 1;

for (let i = 0; i <= pattern.length; i++) {
  stack.push(num++);

  if (i === pattern.length || pattern[i] === "I") {
    console.log(i === pattern.length);

    while (stack.length > 0) {
      result.push(stack.pop());
    }
  }
}

console.log(result.join(""));
