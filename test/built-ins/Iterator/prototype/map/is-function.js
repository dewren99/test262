// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.map
description: >
  Iterator.prototype.map is a built-in function
features: [iterator-helpers]
---*/

assert.sameValue(typeof Iterator.prototype.map, 'function', 'The value of `typeof Iterator.prototype.map` is "function"');
