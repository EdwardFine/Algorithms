/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let num1=0;
    for(let i=0;i<nums.length-1;i++){
        num1=nums[i];
        for(let j = i + 1; j < nums.length; j++){
            if(num1 + nums[j] == target){
                return [i,j];
            }
        }
    }
};