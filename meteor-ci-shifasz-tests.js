// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-ci-shifasz.js.
import { name as packageName } from "meteor/shifasz:meteor-ci-shifasz";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-ci-shifasz - example', function (test) {
  test.equal(packageName, "meteor-ci-shifasz");
});
