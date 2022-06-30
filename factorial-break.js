let n = 10;
let i = 1;
while (n) {
  if (n == 0 || n == 1) {
    console.log(i);
    break;
  } else {
    i = i * n;
    n = n - 1;
  }
}
