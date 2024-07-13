function lengthOfLastWord(str) {
    let arr = str.split(" ");
    arr = arr.filter(word => word.length > 0)
    let lastWord = arr[arr.length - 1];

    return lastWord.length
}
console.log(lengthOfLastWord("ahmad  braah"));