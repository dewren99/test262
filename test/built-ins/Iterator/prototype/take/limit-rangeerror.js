// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.take
description: >
  Throws a RangeError exception when limit argument is NaN or less than 0.
info: |
  %Iterator.prototype%.take ( limit )

  4. If numLimit is NaN, throw a RangeError exception.
  5. Let integerLimit be ! ToIntegerOrInfinity(numLimit).
  6. If integerLimit < 0, throw a RangeError exception.

includes: [iterators.js]
features: [iterator-helpers]
---*/
let iterator = new Test262Iterator([1, 2]);

iterator.take(0);
iterator.take(-0.5);
iterator.take(null);

assert.throws(RangeError, () => {
  iterator.take(-1);
}, '`iterator.take(-1)` throws a RangeError exception');

assert.throws(RangeError, () => {
  iterator.take();
}, '`iterator.take()` throws a RangeError exception');

assert.throws(RangeError, () => {
  iterator.take(undefined);
}, '`iterator.take(undefined)` throws a RangeError exception');

assert.throws(RangeError, () => {
  iterator.take(NaN);
}, '`iterator.take(NaN)` throws a RangeError exception');
