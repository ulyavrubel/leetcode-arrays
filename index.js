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
    let leftTemp = [];
    let right = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0)
          leftTemp.push(nums[i]);
        else
          right.push(nums[i]);          
    }

    const left = [];

    for (let i = leftTemp.length - 1; i >=0; i--) {
      left.push( Math.pow(leftTemp[i], 2))
    }

    for (let i = 0; i < right.length; i++) {
      right[i] = Math.pow(right[i], 2)
    }

    let res = [];
    let iL = 0;
    let iR = 0;

    console.log(left, right)

    while (iL < left.length && iR < right.length) {
      if (left[iL] < right[iR]) {
        res.push(left[iL]);
        iL++;
      } else {
        res.push(right[iR]);
        iR++;
      }
    }

    console.log(iL, iR)

    return [...res, ...left.slice(iL), ...right.slice(iR)];   
    
};

console.log(sortedSquares([-5,-3,-2,-1]));
// console.log(sortedSquares([-10000,-9999,-7,-5,0,0,10000]));
// console.log(sortedSquares([]));
// console.log(sortedSquares([1]));


var sortedSquares = function(nums) {
    let l = 0, r = nums.length - 1;
    let res = new Array(nums.length);
    let idx = nums.length - 1;
    while(l <= r) {
        let n1 = nums[l] ** 2;
        let n2 = nums[r] ** 2;
        if(n1 > n2) {
            res[idx--] = n1;
            l++;
        } else {
            res[idx--] = n2;
            r--;
        }
    }
    return res;
};