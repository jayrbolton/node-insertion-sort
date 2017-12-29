# Node insertion sort

Insertion sort is a simple sorting algorithm. In most cases, you will want to use quicksort, heapsort, or merge sort, but there are some exceptions:

> Although it is one of the elementary sorting algorithms with O(n^2) worst-case time, insertion sort is the algorithm of choice either when the data is nearly sorted (because it is adaptive) or when the problem size is small (because it has low overhead).
>
> For these reasons, and because it is also stable, insertion sort is often used as the recursive base case (when the problem size is small) for higher overhead divide-and-conquer sorting algorithms, such as merge sort or quick sort.

## Usage

```js
var sort = require('@jayrbolton/insertion-sort')

var sorted = sort([4, -1, 2, 3])

// Pass in a custom comparison function
sort([{x: 1}, {x: 2}], compare)
function compare (obj1, obj2) {
  if (obj1.x < obj2.x) return -1
  if (obj1.x > obj2.x) reuturn 1
  else return 0
}
```

*Note* that this function will mutate the array you pass into it -- this algorithm is totally in-place.
