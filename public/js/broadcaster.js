var socket = new WebSocket('ws://localhost:8081/');
var elm = document.querySelector('#textField');

socket.onopen = function(e) {
  console.log('Opened connection');
}

socket.onerror = function(e) {
  console.log('Error: ' + JSON.stringify(e));
}

socket.onclose = function(e) {
  console.log('Closed connection');
}

var eventHandler = function(e) {
  var json = JSON.stringify({ message: e.target.value });
  socket.send(json);
  console.log('Sent: ' + json);
}

elm.addEventListener('keydown', eventHandler);
elm.addEventListener('keyup', eventHandler);
elm.addEventListener('keypress', eventHandler);
elm.addEventListener('change', eventHandler);

window.addEventListener('beforeunload', function() {
  socket.close();
});
