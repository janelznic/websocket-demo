var socket = new WebSocket('ws://localhost:8081/');
var elm = document.querySelector('#textField');

socket.onopen = function(e) {
  console.log('Opened connection');
}

socket.onerror = function(e) {
  console.log('Error: ' + JSON.stringify(e));
}

socket.onmessage = function(e) {
  var value = JSON.parse(e.data).message;
  elm.value = value;
  console.log('Received: ' + value);
}

socket.onclose = function(e) {
  console.log('Closed connection');
}

window.addEventListener('beforeunload', function() {
  socket.close();
});
