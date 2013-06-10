<<<<<<< HEAD

=======
(function() {
  $(function() {
    return $('#nav nav').on('click', 'a:not(.active)', function(event) {
      $('.active', event.delegateTarget).removeClass('active');
      return $(this).addClass('active');
    });
  });

}).call(this);
>>>>>>> 7140d51c4a595d59531b1dd37a288a10a3912fc0
