(function ($) {

  Drupal.behaviors.kickstarthelp = {
    attach:function () {

      $("#accordion").accordion({ header:'h2' });

      $('.accordion-section').each(function () {

       var TotalCount = $(this).find('input:checkbox').length;
       var CheckedCount = $(this).find('input:checkbox').filter(':checked').length;
       if (TotalCount == CheckedCount && CheckedCount != 0) {
         $(this).find('h2').addClass('checked');
       } else {
         $(this).find('h2').removeClass('checked');
       }
      });

      $('.help-section').each(function () {

        // Tipsy
        $('.tipsy-link', $(this)).attr('title', ($('.child', this).html()));
        $('.tipsy-link', $(this)).tipsy({
          trigger:'manual',
          gravity:'w',
          html:true,
          opacity: 1.0
        });

        var timer;
        var context_local = $(this);
        var hideTipsy = function () {
          $('.tipsy-link', context_local).tipsy('hide');
        };

        $('.tipsy').live('mouseover', function (e) {
          clearTimeout(timer);
        });

        $('.tipsy').live('mouseout', function (e) {
          timer = setTimeout(hideTipsy, 1000);
        });

        $('.tipsy-link', $(this)).bind('mouseover', function (e) {
          $(this).tipsy('show');
        });

        $('.tipsy-link', $(this)).bind('mouseout', function (e) {
          timer = setTimeout(hideTipsy, 1000);
        });

      });


    }
  }
})(jQuery);

