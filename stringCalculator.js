export const add = (numbers) => {
  if (numbers === "") return 0;
  let delimiter = /[,\n]/;
  let numbersToAdd = numbers;

  const nums = numbersToAdd
    .split(delimiter)
    .map((str) => str.trim())
    .filter((str) => str !== "")
    .map(Number);

  return nums.reduce((sum, num) => sum + num, 0);
};
