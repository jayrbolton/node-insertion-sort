module.exports = sort

function sort (arr, comparison) {
  if (arguments.length === 1) comparison = defaultComparison
  for (var j = 1; j < arr.length; ++j) {
    var key = arr[j]
    var i = j - 1
    while (i > -1 && comparison(arr[i], key) === 1) {
      arr[i + 1] = arr[i]
      i = i - 1
    }
    arr[i + 1] = key
  }
  return arr
}

function defaultComparison (x, y) {
  if (x < y) return -1
  if (x > y) return 1
  else return 0
}
