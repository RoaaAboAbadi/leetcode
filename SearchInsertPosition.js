function searchInsert(nums, target) {


    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i;
        } else if (target < nums[i]) {
            return i;
        }

    }
    return nums.length;

}
console.log(searchInsert([1, 3, 5, 7], 4));