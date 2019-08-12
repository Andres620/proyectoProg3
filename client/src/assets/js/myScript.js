$(document).ready(function () {
  $('.sidenav').sidenav({
    edge: 'right',
    closeOnClick: true
  });
  $(".dropdown-trigger").dropdown();
  $('.modal').modal();
  $("#loginNav").on('click',function(){
    console.log("clickaz")
  });
});

