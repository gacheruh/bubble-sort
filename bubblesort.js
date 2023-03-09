function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
}

console.log(bubbleSort([51, 8, 4, 99, 161, 61, 16, 19, 2, 1, 3]));

//For an already sorted array, the bubble sort can be improved by having it terminate ealry
//It can be determined that the sequence is in sorted order when no swaps are performed by the if statement within the inner loop.
// At this point, the function can return immediately without completing the remaining iterations.

function sorted_bubbleSort(arr) {
    let i = 0;
    let temp;
    let swapped = true;
  
    while (swapped) {
      swapped = false;
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      i++;
      if (!swapped) {
        // The array is already sorted
        return arr;
      }
    }
  
    return arr;
  }
  
  console.log(sorted_bubbleSort([1,  2,  3,  4, 8, 16, 19, 51, 61]));
  
  