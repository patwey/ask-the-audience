// create a websocket connection
var socket = io();

var connectionCount = document.getElementById('connection-count');

socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

var statusMessage = document.getElementById('status-message');

socket.on('statusMessage', function (msg) {
  statusMessage.innerText = msg;
});

var buttons = document.querySelectorAll('#choices button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    socket.send('voteCast', this.innerText);
  });
}

socket.on('voteCount', function (votes) {
  for (vote in votes) {
    e = document.getElementById(vote);
    e.innerText = vote + ": " + votes[vote];
  }
});

var currentVote = document.getElementById('current-vote');

socket.on('voteConfirmation', function (message) {
  currentVote.innerText = message;
});
