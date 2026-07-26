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

function myOnce(cb, context) {
  let result;
  return function (...args) {
    if (cb) {
      result = cb.apply(context || this, args);
      cb = null;
    }
    return result;
  };
}

const helloOnce = myOnce((a, b, c) => {
  console.log("Hellow", a, b, c);
});
helloOnce(1, 2, 3);
helloOnce(3, 4, 5);
helloOnce(5, 6, 7);
helloOnce(7, 8, 9);

const clumsyCalculations = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}
  return num1 * num2;
};
function myMemoize(cb) {
  let obj = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!obj[key]) {
      const result = cb(...args);
      obj[key] = result;
    }

    return obj[key];
  };
}
console.time("first call");
console.log(clumsyCalculations(3, 3));

console.timeEnd("first call");

console.time("second call");
console.log(clumsyCalculations(3, 3));

console.timeEnd("second call");

const memoClumsy = myMemoize(clumsyCalculations);

console.time("first call");
console.log(memoClumsy(3, 3));

console.timeEnd("first call");

console.time("second call");
console.log(memoClumsy(3, 3));

console.timeEnd("second call");

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
