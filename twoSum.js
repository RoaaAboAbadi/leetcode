function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target == nums[i] + nums[j]) {
                return [i, j];
            }
        }

    }
    return null;
}
console.log(twoSum([1, 2, 5, 6], 8));