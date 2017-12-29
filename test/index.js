var test = require('tape')
var isort = require('..')

test('basic example', function (t) {
  var arr = [5, 2, 4, 6, 1, 3]
  isort(arr)
  t.deepEqual(arr, [1, 2, 3, 4, 5, 6])
  t.end()
})

test('negatives, infinity, odd length', function (t) {
  var arr = [0, Infinity, -10]
  isort(arr)
  t.deepEqual(arr, [-10, 0, Infinity])
  t.end()
})

test('custom compare', function (t) {
  var arr = [{x: 1}, {x: 0}]
  function compare (x, y) {
    if (x.x < y.x) return -1
    if (x.x > y.x) return 1
    else return 0
  }
  isort(arr, compare)
  t.deepEqual(arr, [{x: 0}, {x: 1}])
  t.end()
})
