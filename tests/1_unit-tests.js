/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

var chai = require("chai");
var assert = chai.assert;
var ConvertHandler = require("../controllers/convertHandler.js");
var convertHandler = new ConvertHandler();

suite("Unit Tests", function() {
  suite("Function convertHandler.getNum(input)", function() {
    test("Whole number input", function(done) {
      var input = "32l";
      chai.assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal Input", function(done) {
      var input = "32.5L";
      assert.equal(convertHandler.getNum(input), 32.5);
      done();
    });

    test("Fractional Input", function(done) {
      var input = "32/5";
      assert.equal(convertHandler.getNum(input), 6.4);
      done();
    });

    test("Fractional Input w/ Decimal", function(done) {
      var input = "32.5/2";
      assert.equal(convertHandler.getNum(input), 16.25);
      done();
    });

    test("Invalid Input (double fraction)", function(done) {
      var input = "3/3/";
      assert.equal(convertHandler.getNum(input), undefined);
      done();
    });

    test("No Numerical Input", function(done) {
      var input = "L";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG"
      ];
      var expected = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg"
      ];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getUnit(ele), expected[i]);
      });
      done();
    });

    test("Unknown Unit Input", function(done) {
      var input = "css";
      assert.equal(convertHandler.getUnit(input), false);
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg"];
      var expect = ["l", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = ["gal", "l", "km", "mi", "lbs", "kg"];
      var expect = [
        "Galons",
        "Liters",
        "Kilometers",
        "Miles",
        "Pounds",
        "Kilograms"
      ];
      input.forEach(function(e, i) {
        assert.equal(convertHandler.spellOutUnit(e), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", function() {
    test("Gal to L", function(done) {
      var input = [5, "gal"];
      var expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("L to Gal", function(done) {
      var input = [5, "l"];
      var expected = 1.32086;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Mi to Km", function(done) {
      var input = [2, "mi"];
      var expected = 3.21868;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Km to Mi", function(done) {
      var input = [2, "km"];
      var expected = 1.24274;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Lbs to Kg", function(done) {
      var input = [2, "lbs"];
      var expected = 0.907185;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Kg to Lbs", function(done) {
      var input = [2, "kg"];
      var expected = 4.40925;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
  });
});
