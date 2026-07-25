const infiniteCurrying = function (a) {
  return function (b) {
    if (b) {
      return infiniteCurrying(a * b);
    }
    return a;
  };
};

console.log("infiniteCurrying ", infiniteCurrying(1)(2)(3)(4)(5)());
//curry implementation
//converts a function(a,b,c) => function(a)(b)(c)

function curry(fun) {
  return function curried(...args) {
    console.log(fun.length , args.length);
    if (fun.length <= args.length) {
      return fun(...args);
    } else {
      return function (...next) {
        return curried(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a * b + c;
const curriedFunc = curry(sum);
console.log(curriedFunc(10)(20)(30));
