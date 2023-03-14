function fibonacci(n) {
  let a = 0;
  let b = 1;
  let fib = [0, 1];
  while (b < n) {
    let temp = b;
    b = a + b;
    a = temp;
    fib.push(b);
  }
  if (b == n || n == 0) {
    console.log(n + ' faz parte da sequência de Fibonacci.');
  } else {
    console.log(n + ' não faz parte da sequência de Fibonacci.');
  }
  console.log('A sequência  Fibonacci até ' + n + ' é: ' + fib.join(', '));
}

fibonacci(10); //altere o valor aqui