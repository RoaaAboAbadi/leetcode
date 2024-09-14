const countSegments = (arr) => {
    if (arr === null || arr.trim() === "") {
        return 0;
    } else {
        let count = 0;
        let strArr = arr.split(" ");

        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i].trim() !== "") {
                count++;
            }
        }

        console.log("count", count);
        return count;
    }
}

countSegments("Hello world! This is a test.");