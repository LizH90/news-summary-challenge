var test = function() {
  var testResult = document.getElementById("test-result");
  var button = document.getElementById("refresh-button");

  var success = function() {
    testResult.insertAdjacentHTML("beforeend", "<li style = color:green>Test Passed! </li>");
    console.log("%cTest Passed", "color:green");
  };

  var fail = function() {
    testResult.insertAdjacentHTML("beforeend", "<li style=color:red>Test Failed!</li>");

  };

  var testIfTrue = function(argument) {
    if (argument) {
      success();
    } else {
      fail();
    };
  };

  var buttonPresent = function() {
    testIfTrue(button);
  };

  var runTests = function() {
    buttonPresent();
  };

  runTests();
};

test();
