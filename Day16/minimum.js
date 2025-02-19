function minimum(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (obj[ch]) {
      obj[ch] = obj[ch] + 1;
    } else {
      obj[ch] = 1;
    }
  }
  let min = 999;
  let res = "";
  for (let key in obj) {
    if (obj[key] < min) {
      min = obj[key];
      res = key;
    }
  }
  return res;
}

console.log(minimum("abbbcccccddddd"));
