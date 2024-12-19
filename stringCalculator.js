export const add = (numbers) => {
  // Return 0 if the input is an empty string
  if (numbers === "") return 0;

  // Default delimiter for splitting numbers (comma `,` or newline `\n`)
  let delimiter = /[,\n]/;
  let numbersToAdd = numbers;

  // Check for custom delimiter syntax (`//[delimiter]\n[numbers]`)
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEnd));
    numbersToAdd = numbers.substring(delimiterEnd + 1);
  }

  // Split the string using the delimiter, remove whitespace, and convert to numbers
  const nums = numbersToAdd
    .split(delimiter)
    .map((str) => str.trim())
    .filter((str) => str !== "")
    .map(Number);

  // Identify any negative numbers in the input
  const negatives = nums.filter((n) => n < 0);

  // Throw an error if there are negative numbers
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  // Calculate and return the sum of all numbers
  return nums.reduce((sum, num) => sum + num, 0);
};
