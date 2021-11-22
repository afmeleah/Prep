// // // // // // //Search for a given number in a sorted array that has been rotated by some arbitrary number.

// // // // // // // let binarySearchRotated = function(arr, key) {
    
// // // // // // //     start = 0;
// // // // // // //     end = arr.length - 1;

// // // // // // //     if (start > end) {
// // // // // // //         return -1;
// // // // // // //     }

// // // // // // //     while (start <= end){
// // // // // // //         mid = start + Math.floor((end-start) /2);

// // // // // // //         if (arr[mid] == key){
// // // // // // //             return mid;
// // // // // // //         }

// // // // // // //         if (arr[start] <= arr[mid] && key <= arr[mid] && key >= arr[start]){
// // // // // // //             end = mid - 1;
// // // // // // //         }

// // // // // // //         else if (arr[mid] <= arr[end] && key >= arr[mid] && key <= arr[end]){
// // // // // // //             start = mid + 1;
// // // // // // //         }

// // // // // // //         else if (arr[end] <= arr[mid]){
// // // // // // //             start = mid + 1;
// // // // // // //         }

// // // // // // //         else if (arr[start] >= arr[mid]){
// // // // // // //             end = mid - 1;
// // // // // // //         }

// // // // // // //         else{
// // // // // // //             return -1;
// // // // // // //         }
// // // // // // //     }
// // // // // // //     return -1;
// // // // // // // };

// // // // // // // let v1 = [6, 7, 1, 2, 3, 4, 5];
    
// // // // // // // console.log("Key(3) found at: " + binarySearchRotated(v1, 4));
// // // // // // // console.log("Key(6) found at: " + binarySearchRotated(v1, 3))
// // // // ---------------------------------------------------------------------------------------------------------

// // // // ---------------------------------------------------------------------------------------------------------
// // // // // // //Given three integer arrays sorted in ascending order, return the smallest number that is common in all three arrays.

// // // // // // let findLeastCommonNumber = function(a,b,c) {
// // // // // //     let i = 0;
// // // // // //     let j = 0;
// // // // // //     let k = 0;

// // // // // //     while(i < a.length && j < b.length && k < c.length){

// // // // // //         if (a[i] === b[j]
// // // // // //             && b[j] === c[k]) {
// // // // // //             return a[i];
// // // // // //         }

// // // // // //         if (a[i] <= [j] && a[i] <= c[k]) {
// // // // // //             i++;
// // // // // //         }

// // // // // //         else if (b[j] <= a[i] && b[j] <= c[k]) {
// // // // // //             j++;
// // // // // //         }

// // // // // //         else if (c[k] <= a[i] && c[k] <= b[j]) {
// // // // // //             k++;
// // // // // //         }
// // // // // //     }

// // // // // //     return -1;
// // // // // // };

// // // // // // let v1 = [4, 6, 7, 10, 25, 30, 63, 64];
// // // // // // let v2 = [0, 4, 5, 6, 7, 8, 50];
// // // // // // let v3 = [1, 4, 6, 10, 14];
// // // // // // console.log("Least Common Number: " + findLeastCommonNumber(v1, v2, v3));
// // // // ---------------------------------------------------------------------------------------------------------

// // // // ---------------------------------------------------------------------------------------------------------
// // // // // // Given an array of integers, rotate the array by 'N' elements.

// // // // // let rotateArray = function(arr, n) {
// // // // //     let len = arr.length;

// // // // //     n = n % len;
// // // // //     if (n < 0) {
// // // // //         n = n + len;
// // // // //     }

// // // // //     let temp = [];

// // // // //     for (let i = 0; i < n; i++) {
// // // // //         temp[i] = arr[len - n + i];
// // // // //     }

// // // // //     for (let i = len - 1; i >=n; i--) {
// // // // //         arr[i] = arr[i -n];
// // // // //     }

// // // // //     for (let i = 0; i < n; i++) {
// // // // //         arr[i] = temp[i];
// // // // //     }
// // // // // };

// // // // // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // // // console.log("Array Before Rotation");
// // // // // console.log(arr)

// // // // // rotateArray(arr, -2);

// // // // // console.log("Array After Rotation");
// // // // // console.log(arr)
// // // // ---------------------------------------------------------------------------------------------------------

// // // // ---------------------------------------------------------------------------------------------------------
// // // // // Given a sorted array of integers, return the low and high index of the given key.

// // // // let findLowIndex = function(arr,key) {
// // // //     let low = 0;
// // // //     let high = arr.length - 1;
// // // //     let mid = Math.floor(high / 2);

// // // //     while (low <= high) {
// // // //         let midElem = arr[mid];
// // // //         if (midElem < key) {
// // // //             low = mid + 1;
// // // //         } else {
// // // //             high = mid - 1;
// // // //         }

// // // //         mid = low + Math.floor((high - low) / 2);
// // // //     }

// // // //     if (low < arr.length && arr[low] === key) {
// // // //         return low;
// // // //     }

// // // //     return -1;
// // // // }

// // // // let findHighIndex = function(arr, key) {
// // // //     let low = 0;
// // // //     let high = arr.length - 1;
// // // //     let mid = Math.floor(high / 2);

// // // //     while (low <= high) {
// // // //         let midElem = arr[mid];
// // // //         if (midElem <= key) {
// // // //             low = mid + 1;
// // // //         } else {
// // // //             high = mid - 1;
// // // //         }

// // // //         mid = low + Math.floor((high - low) / 2);
// // // //     }

// // // //     if (high === -1){
// // // //         return high
// // // //     }

// // // //     if (high < arr.length && arr[high] === key) {
// // // //         return high;
// // // //     }

// // // //     return -1;
// // // // };

// // // // let array = [-2, -2, -2, -2, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];

// // // //     var key = -2;
// // // //     console.log("Low Index of " + key + ": " + (findLowIndex(array, key)));
// // // //     console.log("High Index of " + key + ": " + (findHighIndex(array, key)));

// // // //     key = 6;
// // // //     console.log("Low Index of " + key + ": " + (findLowIndex(array, key)));
// // // //     console.log("High Index of " + key + ": " + (findHighIndex(array, key)));
// // // // ---------------------------------------------------------------------------------------------------------

// // // // ---------------------------------------------------------------------------------------------------------
// // // //     Move all zeros to the left of an array while maintaining its order.

// // // let moveZerosToLeft = function(A) {
// // //     if (A.length < 1) {
// // //         return;
// // //     }

// // //     let lengthA = A.length;
// // //     let writeIndex = lengthA - 1;
// // //     let readIndex = lengthA - 1;

// // //     while (readIndex >= 0) {
// // //         if (A[readIndex] != 0) {
// // //             A[writeIndex] = A[readIndex];
// // //             writeIndex--;
// // //         }

// // //         readIndex--;
// // //     }

// // //     while(writeIndex >= 0) {
// // //         A[writeIndex] = 0;
// // //         writeIndex--;
// // //     }
// // // };

// // // let v = [1, 10, 20, 0, 59, 63, 0, 88, 25, 0, 15, 0, 0];
// // //     console.log("Original Array: [" + v + "]");

// // //     moveZerosToLeft(v);

// // //     console.log("After Moving Zeros: [" + v+ "]");

// // //     Given a list of stock prices for n days, find the maximum profit with a single buy or sell activity.

// // let findBuySellStockPrices = function(array) {
// //     if (!array || array.length < 2) {
// //         return;
// //     }

// //     let currentBuy = array[0];
// //     let globalSell = array[1];
// //     let globalProfit = globalSell - currentBuy;

// //     let currentProfit = 0;

// //     for (let i = 1; i < array.length; i++) {
// //         currentProfit = array[i] - currentBuy;

// //         if (currentProfit > globalProfit) {
// //             globalProfit = currentProfit;
// //             globalSell = array[i];
// //         }
// //     }
// //     return [globalSell - globalProfit, globalSell]
// // };

// // let arrayForStockPrices = [1, 2, 3, 4, 3, 2, 1, 2, 5];
// // let result = findBuySellStockPrices(arrayForStockPrices);
// // console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);

// // arrayForStockPrices = [8, 6, 5, 4, 3, 2, 1];
// // result = findBuySellStockPrices(arrayForStockPrices);
// // console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);

// // Merge overlapping intervals in an array of interval pairs.

// class Pair {
//     constructor(first, second) {
//         this.first = first;
//         this.second = second;
//     }
// }

//     let mergeIntervals = function(v) {
//         if (!v || v.length === 0) {
//             return;
//         }

//         let result = [];
//         result.push(new Pair(v[0].first, v[0].second));

//         for (let i = 0; i < v.length; i++) {
//             let x1 = v[i].first;
//             let y1 = v[i].second;
//             let x2 = result[result.length - 1].first;
//             let y2 = result[result.length - 1].second;

//             if (y2 >= x1) {
//                 result[result.length - 1].second = Math.max(y1, y2);
//             } else {
//                 result.push(new Pair(x1, y1));
//             }
//         }
//         return result;
//     };

//     let v = [new Pair(1, 5), new Pair(3, 7), new Pair(4, 6), 
//         new Pair(6, 8), new Pair(10, 12), new Pair(11, 15)];

// let result = mergeIntervals(v)

// let result_str = ""
// for (let i = 0; i < result.length; i++){
//     result_str = result_str + "[" + result[i].first + ", " + result[i].second + "] "
// }
// console.log(result_str)

// Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value.

let findSumOfTwo = function(A, val) {
    let foundValues = new Set();
    for (let a in A) {
        if (foundValues.has(val - A[a])) {
            return true;
        }

        foundValues.add(A[a]);
    }

    return false;
};

let v = [5, 7, 1, 2, 8, 4, 3];
let test = [3, 20, 1, 2, 7];

for (i = 0; i < test.length; i++) {
    let output = findSumOfTwo(v, test[i]);
    console.log("findSumOfTwo(v, " + test[i] + ") = " + output);
}
