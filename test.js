#!/usr/bin/env node

var test = require("tap").test;

test("make sure the thingie is a thing", function (t) {
  var object = {foo: 42};
  t.deepEqual(object, {foo: 42}, "object has foo property");
  t.end();
});
