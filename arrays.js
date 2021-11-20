//Search for a given number in a sorted array that has been rotated by some arbitrary number.

let binarySearchRotated = function(arr, key) {
    
    start = 0;
    end = arr.length - 1;

    if (start > end) {
        return -1;
    }

    while (start <= end){
        mid = start + Math.floor((end-start) /2);

        if (arr[mid] == key){
            return mid;
        }

        if (arr[start] <= arr[mid] && key <= arr[mid] && key >= arr[start]){
            end = mid - 1;
        }

        else if (arr[mid] <= arr[end] && key >= arr[mid] && key <= arr[end]){
            start = mid + 1;
        }

        else if (arr[end] <= arr[mid]){
            start = mid + 1;
        }

        else if (arr[start] >= arr[mid]){
            end = mid - 1;
        }

        else{
            return -1;
        }
    }
    return -1;
};

let v1 = [6, 7, 1, 2, 3, 4, 5];
    
console.log("Key(3) found at: " + binarySearchRotated(v1, 4));
console.log("Key(6) found at: " + binarySearchRotated(v1, 3));