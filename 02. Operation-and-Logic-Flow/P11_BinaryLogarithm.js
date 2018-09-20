function CalculateBinaryLogarithm(nums) {
  for (let x of nums) {
    console.log(Math.log2(x));
  }
}
let input = [1024, 1048576, 256, 1, 2]
CalculateBinaryLogarithm(input);
