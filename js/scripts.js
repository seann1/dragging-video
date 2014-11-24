$( init );
 
function init() {
  $('.square1, .square2, .square3, .square4').draggable({
  	cursor: 'move',

  });

  $('.destination1, .destination2, .destination3, .destination4').droppable({
  	drop: handleDropEvent

  });
}

function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
};

function check() {

if ($('.destination1').find('#square1')) {
	alert("Hello");
}

}

check();