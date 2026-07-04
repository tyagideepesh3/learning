console.log(1);

setTimeout(()=>{
    console.log('2')
},0)

const myPromise = new Promise((resolve , reject) => { //The Promise executor runs immediately.
    console.log('3')
    resolve('4'); // resolve('4') settles the promise, but the .then() callback is not executed immediately. It will be queued as a microtask once a .then() handler is attached.
})

myPromise.then((data) => {console.log(data)}).catch((err) => {console.log(err)});

queueMicrotask(() => {console.log('5')})

console.log('6');