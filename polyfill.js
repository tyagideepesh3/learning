Array.prototype.myMap = function (callback) {
  const arr = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    arr.push(callback(element));
  }
  return arr;
};

Array.prototype.myFilter = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    if (callback(element)) arr.push(element);
  }
  return arr;
};

Array.prototype.myReduce = function (cb, initVal) {
  let acc = initVal;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};

let arr = [1, 2, 3, 4, 5, 6];

console.log(
  arr.myMap((ele) => {
    return 2 * ele;
  }),
);

console.log(
  arr.myFilter((ele) => {
    return ele >= 2;
  }),
);

console.log(
  arr.myReduce((acc, ele) => {
    return acc + ele;
  }),
);
