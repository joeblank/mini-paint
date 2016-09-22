$('document').ready(function() {

$('.box').on('click', function() {
  $(this).addClass('white');
});
$('.box').on('dblclick', function() {
  $(this).removeClass('white');
})
$('#reset').on('click', function() {
  $('.box').removeClass('white');
});

var color = 'white';

$('#red').on('click', function() {
  color = 'red';
});
$('#blue').click(function() {
  color = 'blue';
});
$('#green').click(function() {
  color = 'green';
});
$('#yellow').click(function() {
  color = 'yellow';
})
$('#white').click(function() {
  color = 'white';
});

$('.box').click(function() {
  // $(this).removeClass();
  $(this).addClass(color);
})

var colors = 'white green red blue yellow';

$('.box').on('dblclick', function() {
  $(this).removeClass(colors);
})
$('#reset').click(function() {
  $('.box').removeClass(colors);
})

});
