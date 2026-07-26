// Debounce → "Execute only after the events have stopped for X milliseconds." gaurantees that the last event is executed
// typing for search
// Throttle → "Execute at most once every X milliseconds." does not gaurantee if the last one is executed
// scrolling
//debouncing
const getSearch = function (input) {
  console.log("get search for ", input);
};

function debounce(cb) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
    }, 200);
  };
}

const deb = debounce(getSearch);

function throttle(cb) {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if(now - last < 20) return;
    last = now
    cb(...args);
  };
}

const throttled = throttle(getSearch);

for (let i = 0; i < 20000000; i++) {
    throttled(i)
    
}