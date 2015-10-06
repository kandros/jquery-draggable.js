/*!
 * jquery-draggable.js v0.0.1 (http://github.com/kandros/jquery-draggable.js/)
 * author: Jaga Santagostino (kandros)
 * release-date: 05/10/2015
 */

;(function($) {
  var $document = $(document),
      $draggableItems;

  $.initDraggable = function() {
    $draggableItems = $("[data-draggable]");
    $draggableItems.each(function() {
      makeDraggable($(this));
    });
  };

  function makeDraggable($el) {
    var element = $el;
    var startX = 0,
      startY = 0,
      x = 0,
      y = 0;

    element.css({
      position: "relative",
      cursor: "pointer",
      padding: "10px"
    });

    element.on("mousedown", function(e) {
      e.preventDefault();
      startX = e.pageX - x;
      startY = e.pageY - y;

      element.css({
        backgroundColor: "black",
        color: "white"
      });

      $document.on("mousemove", mousemove);
      $document.on("mouseup", mouseup);
    });

    function mousemove(e) {
      x = e.pageX - startX;
      y = e.pageY - startY;

      element.css({
        top: y + "px",
        left: x + "px"
      });
    }

    function mouseup() {
      element.css({
        backgroundColor: "white",
        color: "black"
      });
      $document.off("mousemove", mousemove);
      $document.off("mouseup", mouseup);
    }

  }

})(jQuery);
