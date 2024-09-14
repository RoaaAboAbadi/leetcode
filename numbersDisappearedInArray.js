const findDisappearedNumbers = (arr) => {
    let newArr = [];
    for (let i = 1; i <= arr.length; i++) {
        if (!arr.includes(i)) {
            newArr.push(i)
            console.log(newArr)
        }
    }
    return newArr
}
findDisappearedNumbers([1, 2, 5, 4, 8, 6, 2, 6])