function resolve() {
  try {
    console.log('try')
    return 1;
  } catch (error) {
    console.log('error')
    return 2;
  }finally{
    console.log('finally')
    return 3;
  }
}

console.log(resolve())