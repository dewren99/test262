// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Returns abrupt when value accessor is abrupt.
info: |
  %Iterator.prototype%.every ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let valueGets = 0;
let nextCalls = 0;
class Test262IteratorThrows extends Test262Iterator {
   next() {
    nextCalls++;
    return {
      get value() {
        valueGets++;
        throw new Test262Error();
      }
    };
  }
}

let iterator = new Test262IteratorThrows([1, 2]);
assert.sameValue(nextCalls, 0, 'The value of `nextCalls` is 0');

assert.throws(Test262Error, function (){
  iterator.every(v => v);
});

assert.sameValue(valueGets, 1, 'The value of `valueGets` is 1');
assert.sameValue(nextCalls, 1, 'The value of `nextCalls` is 1');
