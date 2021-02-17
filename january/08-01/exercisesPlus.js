function primorial(num) {
  let numbers = [];
  let finalNumbers;
  let i = 0;
  do {
    i++;
    if (i == 1 || i == 2 || i == 3 || i == 5) {
      numbers.push(i);
    } else if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % i == 0) {
      numbers.push(i);
    }
  } while (numbers.length <= num);

  //   while (num > 0) {
  //     numbers.push(num);
  //     num--;
  //   }
  console.log(numbers);
  finalNumbers = numbers.reduce((acc, item) => (acc *= item), 1);
  return finalNumbers;
}
console.log(primorial(2));
