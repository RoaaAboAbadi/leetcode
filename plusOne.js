function plusOne(arr) {
    let numStr = arr.join("");
    let num = parseInt(numStr);
    num += 1;

    let resultStr = num.toString();
    let result = resultStr.split("").map(Number);

    return result
}

console.log(plusOne([1, 2, 3]));