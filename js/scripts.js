$( init );
 
function init() {
  $('.square1, .square2, .square3, .square4').draggable({
  	cursor: 'move',

  });

  $('.destination1, .destination2, .destination3, .destination4').droppable({
  	drop: handleDropEvent,
  	drop: dropPush

  });
}

function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
};

var orderArray = [];

function dropPush( event, ui ) {
	var draggable = ui.draggable;
	orderArray.push(draggable.attr('id'));
}