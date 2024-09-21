const containsNearbyDuplicate = (arr, k) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let epual = j - i;
            if (arr[i] == arr[j] && epual <= k) {
                return true
            }
        }
    }

    return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 2))