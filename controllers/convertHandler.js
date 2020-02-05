/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    input = input.split("");
    let regexNumAndDecimal = /^[0-9]*\.?[0-9]*$/;

    let nums = [];

    for (let x = 0; x < input.length; x++) {
      if (regexNumAndDecimal.test(input[x]) == true) {
        nums.push(input[x]);
      } else if (input[x] == "/") {
        nums.push(input[x]);
      }
    }

    let decimals = 0;
    let fractions = 0;

    for (let x = 0; x < nums.length; x++) {
      if (nums[x] == ".") {
        decimals++;
      } else if (nums[x] == "/") {
        fractions++;
      }
    }
    if (decimals > 1 || fractions > 1) {
      return undefined;
    } else if (nums.length == 0) {
      let result = 1;
      return result;
    } else {
      let result = eval(nums.join(""));
      return result;
    }
  };

  this.getUnit = function(input) {
    input = input.toLowerCase();
    let inputToArray = input.split("");
    let letters = [];
    let regexLetters = /[a-zA-Z]/;
    inputToArray.forEach(function(character) {
      if (regexLetters.test(character)) {
        letters.push(character);
      }
    });
    let measures = ["km", "l", "kg", "mi", "gal", "lbs"];
    let result = letters.join("");
    if (measures.includes(result)) {
      return result;
    } else {
      return false;
    }
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case "mi":
        result = "km";
        break;
      case "lbs":
        result = "kg";
        break;
      case "gal":
        result = "l";
        break;
      case "km":
        result = "mi";
        break;
      case "kg":
        result = "lbs";
        break;
      case "l":
        result = "gal";
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    switch (unit) {
      case "km":
        result = "Kilometers";
        break;
      case "mi":
        result = "Miles";
        break;
      case "gal":
        result = "Galons";
        break;
      case "l":
        result = "Liters";
        break;
      case "lbs":
        result = "Pounds";
        break;
      case "kg":
        result = "Kilograms";
        break;
    }

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "mi":
        result = miToKm * initNum;
        break;
      case "gal":
        result = galToL * initNum;
        break;
      case "lbs":
        result = lbsToKg * initNum;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "kg":
        result = initNum * 2.205;
        break;
      case "l":
        result = initNum / galToL;
        break;
      default:
        result = undefined;
    }
    return result;
  };
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
}

module.exports = ConvertHandler;
