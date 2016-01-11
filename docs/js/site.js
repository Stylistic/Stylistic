var headingAnchors = new AnchorJS({
  placement: 'left',
  icon: ''
});

headingAnchors.add('.anchor');

$('.icon-list li').on('click', function(e) {
  var elClass = $(this).attr('class').split(' ');
  var open = $(this).hasClass('open');
  $('.icon-list li').removeClass('open');
  var classname = $(this).append('<span class="classname">' + elClass[0] + '</span>');
  if (!open) {
    $(this).addClass('open');
  } else {
    this.remove(classname);
  }
});
