function removeElement(arr, val) {
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[index] = arr[i];
            index++;
        }
    }
    return index;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));