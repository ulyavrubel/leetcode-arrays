//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// var sortedSquares = function(nums) {
//     const result = [];
//     let index = nums.length -1;
    
//     if (nums.length == 0)
//         return [];
    
//     if (nums.length == 1)
//          return [Math.pow(nums[0], 2)];
    
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i - 1] < 0 && (nums[i] >= 0)) {           
//             index = i;            
//         }            
//     }
    
//     result.push(Math.pow(nums[index], 2));

//     for (let i = 1; i < nums.length; i++) {
//       console.log(nums[index + i], nums[index - i])
//         if (nums[index + i] < Math.abs(nums[index - i])) {
//             nums[index + i] !== undefined && result.push(Math.pow(nums[index + i], 2));
//             nums[index - i] !== undefined && result.push(Math.pow(nums[index - i], 2));
//         }
            
//         else {
//             nums[index - i] !== undefined && result.push(Math.pow(nums[index - i], 2));
//             nums[index + i] !== undefined && result.push(Math.pow(nums[index + i], 2));
//         }

//     }
    
//     return result;    
    
// };

var sortedSquares = function(nums) {
    let left = [];
    let right = nums;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < 0 && (nums[i] >= 0)) {           
            left = nums.slice(0, i);
            right = nums.slice(i);        
        }            
    }

//invert
    for (let i = 0; i < right.length; i++)


//pow for both


//merge sorted https://www.geeksforgeeks.org/merge-sort/
    console.log(left, right);
    
    // for (let i = 0; i < nums.length / 2 + 1; i++) {
    //   if (Math.abs(nums[i]) >= Math.abs(nums[nums.length - i - 1]))
    //     result.unshift(Math.pow(nums[nums.length - 1], 2), Math.pow(nums[i], 2))
    // }
    
    // return result;    
    
};


console.log(sortedSquares([-10000,-9999,-7,-5,0,0,10000]));
console.log(sortedSquares([]));
console.log(sortedSquares([1]));