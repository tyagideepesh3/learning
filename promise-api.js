const p1 = Promise.resolve(1);

const p2 = Promise.resolve(2);

const p3 = Promise.reject(3);

// Runs multiple promises in parallel and waits until all succeed.

// If any one fails, the entire Promise rejects immediately.

Promise.all([p1, p2, p3]).then((values) => {
    console.log('all:', values); // [1, 2, 3]
}).catch((err) => {
    console.log('all error:', err);
});

// Waits until every promise finishes, regardless of success or failure.

Promise.allSettled([p1, p2, p3]).then((results) => {
    console.log( 'allsetteled ', results); // [{status: 'fulfilled', value: 1}, {status: 'fulfilled', value: 2}, {status: 'fulfilled', value: 3}]
}).catch((err) => {
    console.log('allSettled error:', err);
});

// Returns the result of the first promise to settle (fulfilled or rejected).

Promise.race([p1, p2, p3]).then((value) => {
    console.log('race:', value); // 1
}).catch((err) => {
    console.log('race error:', err);
});

// 6. Promise.any()

// Returns the first fulfilled promise.

// Rejected promises are ignored unless all promises reject.

Promise.any([p1, p2, p3]).then((value) => {
    console.log('any:', value); // 1
}).catch((err) => {
    console.log('any error:', err);
});




// | API                       | Waits for       | Returns                        | Rejects when                                                     |
// | ------------------------- | --------------- | ------------------------------ | ---------------------------------------------------------------- |
// | `Promise.resolve()`       | Immediate       | Fulfilled Promise              | Never                                                            |
// | `Promise.reject()`        | Immediate       | Rejected Promise               | Immediately                                                      |
// | `Promise.all()`           | All promises    | Array of values                | First rejection                                                  |
// | `Promise.allSettled()`    | All promises    | Status objects                 | Never (unless something unexpected happens outside the promises) |
// | `Promise.race()`          | First settled   | First value/reason             | If the first settled promise rejects                             |
// | `Promise.any()`           | First fulfilled | First fulfilled value          | When all promises reject (`AggregateError`)                      |
// | `Promise.withResolvers()` | N/A             | `{ promise, resolve, reject }` | Depends on how you use `reject()`                                |
