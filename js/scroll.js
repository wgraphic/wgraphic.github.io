var $document = $(document),
    $body = $('body'),
    $scrolable = $('.one-third');

$scrolable.on({
          'mouseenter': function () {
            // save scroll position
            //var scrollPosition = $document.scrollTop();

            // add hack class to prevent workspace scroll when scroll outside
            $body.addClass('noscroll');

            // restore scroll position
            //element.scrollTop(scrollPosition);
          },
          'mouseleave': function () {
            // save scroll position
            //var scrollPosition = element.scrollTop();

            // remove hack class to allow scroll
            $body.removeClass('noscroll');

            // restore scroll position
            //$document.scrollTop(scrollPosition);
          }
        });