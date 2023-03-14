// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator has throwing return
info: |
  %Iterator.prototype%.every ( predicate )

  4.f. If ToBoolean(result) is false, return ? IteratorClose(iterated, NormalCompletion(false)).

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
class Test262IteratorThrows extends Test262Iterator {
  return() {
    throw new Test262Error();
  }
}

let iterator = new Test262IteratorThrows([1, 2]);

assert.throws(Test262Error, function() {
  iterator.every(() => false);
});
