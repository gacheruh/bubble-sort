# Bubble Sort

Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order. The basic idea is to pass through the list of elements repeatedly, comparing adjacent pairs and swapping them if they are in the wrong order. The algorithm continues to pass through the list until no more swaps are necessary, indicating that the list is now sorted.

The algorithm gets its name from the way that smaller elements "bubble" to the top of the list as the algorithm progresses. At each pass, the largest element in the remaining unsorted portion of the list is guaranteed to "bubble up" to its correct position at the end of the list.

## Here is how bubble sort works in more detail:

1. Start at the beginning of the list.
2. Compare the first two elements. If the first element is greater than the second element, swap them.
3. Move to the next pair of elements and repeat step 2.
4. Continue this process, comparing and swapping adjacent pairs of elements, until you reach the end of the list.
5. At this point, the largest element is guaranteed to be at the end of the list. Repeat steps 1-4, but this time ignore the last element of the list, which is already sorted.
6. Continue repeating steps 1-5, each time ignoring one more element from the end of the list, until the entire list is sorted.


Bubble sort is a simple algorithm to understand and implement, but it is not very efficient for large lists, as it requires many passes through the list and many swaps. Its worst-case and average-case time complexity is O(n^2), where n is the number of elements in the list.
