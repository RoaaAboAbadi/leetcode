const containsDuplicate = (arr) => {
    let seenElements = {};

    for (let i = 0; i < arr.length; i++) {
        if (seenElements[arr[i]]) {
            return true;
        } else {
            seenElements[arr[i]] = true;
        }
    }
    return false;
}

console.log(containsDuplicate([2, 6, 6, 8]));
console.log(containsDuplicate([1, 2, 3, 4]));
