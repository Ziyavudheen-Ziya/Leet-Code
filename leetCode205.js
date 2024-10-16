let s = "paper".split("");
let t = "title".split("");
let isomorphic = true;
if (s.length !== t.length) {
  console.log(false);
}

let maps = new Map();
let mapt = new Map();

for (let i = 0; i < s.length; i++) {
  let char1 = s[i];
  let char2 = t[i];
  if (maps.has(char1)) {
    if (maps.get(char1) != char2) {
      console.log("Hello");

      isomorphic = false;
      break;
    }
  }

  if (mapt.has(char2)) {
    if (mapt.get(char2) != char1) {
      console.log("Hai");

      isomorphic = false;
      break;
    }
  }

  maps.set(char1, char2);
  mapt.set(char2, char1);
}

console.log(isomorphic);
