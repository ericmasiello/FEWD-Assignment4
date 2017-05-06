$(document).ready(function() {
  // hide topnav initially
 if (screen.width < 660) {
  $('#topNav').hide();
} else {
  $('#topNav').show();
}

  $('.container').click(show);
  function show() {
    //console.log('got to click')
    event.preventDefault();
    if (screen.width < 660) {
  $('#topNav').toggle();
} else {
  $('#topNav').show();
}
}
});