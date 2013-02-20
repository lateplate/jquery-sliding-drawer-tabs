$(document).ready(function(event){ 
  $('.panel-tab').on('click', function(event){
    event.preventDefault();
    $('.panel-stage').slideToggle(300, function(event){
      if($(this).is(':visible')) {
        $('.panel-tab').html('Close ▲');
      } else {
        $('.panel-tab').html('Open ▼');
      }
    })

  })

  $('.tabs-stage .tab').hide();
  $('.tabs-stage .tab:first').show();
  $('.tabs-nav li:first').addClass('tab-active');

  $('.tabs-nav a').on('click', function(event){
    event.preventDefault;
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage .tab').hide();
    $($(this).attr('href')).show();
  })

  console.log('JS finished');

});