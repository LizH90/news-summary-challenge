(function(exports) {
  function ApiCaller(api) {
    this.request = new XMLHttpRequest();
    this.api = api;
    this.responseArray = ""
  };

  ApiCaller.prototype.getResponse = function() {
    this.request.open('GET',this.api,false);
    this.request.send();
    // this.request.onload = function() {
    var ourData = JSON.parse(this.request.response);
    // renderHTML(ourData);
    this.response = ourData.response.results
  };

  // ApiCaller.prototype.renderHTML = function(data) {
  //
  // }
  exports.ApiCaller = ApiCaller;
})(this);
