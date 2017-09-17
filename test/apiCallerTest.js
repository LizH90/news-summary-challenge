describe("Creating API Call request", function() {
  var apiCaller = new ApiCaller("https://content.guardianapis.com/search?api-key=test");

  it("Creates a XMLHttpRequest", function() {
    assert.isTrue(apiCaller.request.constructor === XMLHttpRequest);
  });

  // it("Receives a response from the API", function() {
  //   apiCaller.getResponse();
  //   assert.isTrue(apiCaller.request.constructor.response != "")
  // });
});
