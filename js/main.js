(function() {
  $(function() {
    return $('#nav nav').on('click', 'a:not(.active)', function(event) {
      $('.active', event.delegateTarget).removeClass('active');
      return $(this).addClass('active');
    });
  });

}).call(this);
