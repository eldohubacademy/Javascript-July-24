// Write a function `rotateArray(arr, k)` that rotates an array `arr` by `k` positions to the right. For example, if `arr = [1, 2, 3, 4, 5]` and `k = 2`, the output should be `[4, 5, 1, 2, 3]`.

const input =  [1, 2, 3, 4, 5,6,7,8]

const rounds = 3

const expectedOutput = [3,4,5,1,2]

function rotateArray(arr, k){
    // split the array by two, 
    // merge them in reverse(strtin with the )
    let firstPart = arr.slice(0, arr.length-k)
    let lastPart = arr.slice(arr.length-k, arr.length  )
    return   [...lastPart , ...firstPart] // spread operator
}

console.log( rotateArray(input, 5)   );
// 4,5