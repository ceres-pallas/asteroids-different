var assert = require('assert');

var factory = require('../index');

var d1 = factory(1);

assert(d1(1, 3));
assert(!d1(1, 2));
assert(!d1(1, 1));

var d01 = factory(0.1);

assert(d01(1, 3));
assert(d01(1, 2));
assert(!d01(1, 1));
