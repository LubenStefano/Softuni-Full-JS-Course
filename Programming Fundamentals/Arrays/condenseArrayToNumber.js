function condenseArrayToNumber(nums) {
        for (let j = nums.length; j > 1; j--) {
            let condensed = [];
            for (let i = 0; i < j - 1; i++) {
                condensed.push(nums[i] + nums[i + 1]);
            }
            nums = condensed;
        }
        console.log(nums[0])
    
}
condenseArrayToNumber([1])