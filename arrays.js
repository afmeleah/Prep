//Search for a given number in a sorted array that has been rotated by some arbitrary number.

// let binarySearchRotated = function(arr, key) {
    
//     start = 0;
//     end = arr.length - 1;

//     if (start > end) {
//         return -1;
//     }

//     while (start <= end){
//         mid = start + Math.floor((end-start) /2);

//         if (arr[mid] == key){
//             return mid;
//         }

//         if (arr[start] <= arr[mid] && key <= arr[mid] && key >= arr[start]){
//             end = mid - 1;
//         }

//         else if (arr[mid] <= arr[end] && key >= arr[mid] && key <= arr[end]){
//             start = mid + 1;
//         }

//         else if (arr[end] <= arr[mid]){
//             start = mid + 1;
//         }

//         else if (arr[start] >= arr[mid]){
//             end = mid - 1;
//         }

//         else{
//             return -1;
//         }
//     }
//     return -1;
// };

// let v1 = [6, 7, 1, 2, 3, 4, 5];
    
// console.log("Key(3) found at: " + binarySearchRotated(v1, 4));
// console.log("Key(6) found at: " + binarySearchRotated(v1, 3))

//Given three integer arrays sorted in ascending order, return the smallest number that is common in all three arrays.

let findLeastCommonNumber = function(a,b,c) {
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < a.length && j < b.length && k < c.length){

        if (a[i] === b[j]
            && b[j] === c[k]) {
            return a[i];
        }

        if (a[i] <= [j] && a[i] <= c[k]) {
            i++;
        }

        else if (b[j] <= a[i] && b[j] <= c[k]) {
            j++;
        }

        else if (c[k] <= a[i] && c[k] <= b[j]) {
            k++;
        }
    }

    return -1;
};

let v1 = [4, 6, 7, 10, 25, 30, 63, 64];
let v2 = [0, 4, 5, 6, 7, 8, 50];
let v3 = [1, 4, 6, 10, 14];
console.log("Least Common Number: " + findLeastCommonNumber(v1, v2, v3));