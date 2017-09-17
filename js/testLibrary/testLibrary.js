(function(exports) {

  var testResult = document.getElementById("test-result")

  var assert = {
    isTrue: function(assertion) {
      if (!assertion) {
        testResult.innerHTML += (" - FAILED<br>")
      } else {
        testResult.innerHTML += (" - PASSED<br>")
      }
    }
  };

  var describe = function(description, test) {
    console.log(description);
    testResult.innerHTML += ("<h4>" + description + "</h4>");
    test();
  };

  var it = function(description, test) {
    console.log(" " + description);
    document.getElementById("test-result").innerHTML += (description);
    test();
  };

  exports.assert = assert;
  exports.describe = describe;
  exports.it = it;
})(this);
