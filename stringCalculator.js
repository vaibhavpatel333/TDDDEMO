export const add = (numbers) => {
  if (numbers === "") return 0;

  let delimiter = /[,\n]/;
  let numbersToAdd = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEnd));
    numbersToAdd = numbers.substring(delimiterEnd + 1);
  }

  const nums = numbersToAdd
    .split(delimiter)
    .map((str) => str.trim())
    .filter((str) => str !== "")
    .map(Number);

  const negatives = nums.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
};
