$( init );
 
function init() {
  $('.square1, .square2, .square3, .square4').draggable({
  	cursor: 'move',

  });

  $('.destination1').droppable({
  	drop: handleDropEvent1

  });

  $('.destination2').droppable({
  	drop: handleDropEvent2

  });

  $('.destination3').droppable({
  	drop: handleDropEvent3

  });

  $('.destination4').droppable({
  	drop: handleDropEvent4

  });
}

var answerArray = [];

function handleDropEvent1( event, ui ) {
  var draggable = ui.draggable;
  if (draggable.attr('id') === "square1") {
  	answerArray.push("true");
  }
};

function handleDropEvent2( event, ui ) {
  var draggable = ui.draggable;
  if (draggable.attr('id') === "square2") {
  	answerArray.push("true");
  }
};

function handleDropEvent3( event, ui ) {
  var draggable = ui.draggable;
  if (draggable.attr('id') === "square3") {
  	answerArray.push("true");
  }
};

function handleDropEvent4( event, ui ) {
  var draggable = ui.draggable;
  if (draggable.attr('id') === "square4") {
  	answerArray.push("true");
  }
};

if (answerArray = ["true", "true", "true", "true"]) {
  $('#videoId')[0].play();
}