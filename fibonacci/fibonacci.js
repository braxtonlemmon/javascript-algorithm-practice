function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let nextNum;

  for (let i = 0; i < n; i++) {
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
  }
}

fibonacci(8);