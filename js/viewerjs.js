/**
 * @file
 * File previewer using ViewerJS Library.
 */

/**
 * Center an element in the absolute middle of the screen.
 */
jQuery.fn.viewerjsCenterElement = function () {
  var paddingLeft = parseInt(jQuery(this).css('padding-left'), 10);
  var paddingRight = parseInt(jQuery(this).css('padding-right'), 10);
  var paddingTop = parseInt(jQuery(this).css('padding-top'), 10);
  var paddingBottom = parseInt(jQuery(this).css('padding-bottom'), 10);
  var borderLeft = parseInt(jQuery(this).css('borderLeftWidth'), 10);
  var borderRight = parseInt(jQuery(this).css('borderRightWidth'), 10);
  var borderTop = parseInt(jQuery(this).css('borderTopWidth'), 10);
  var borderBottom = parseInt(jQuery(this).css('borderBottomWidth'), 10);
  var left = parseInt(jQuery(window).width() / 2, 10) - parseInt((jQuery(this).width() + paddingLeft + paddingRight + borderLeft + borderRight) / 2, 10);
  var top = parseInt(jQuery(window).height() / 2, 10) - parseInt((jQuery(this).height() + paddingBottom + paddingTop + borderBottom + borderTop) / 2, 10);
  jQuery(this).css({left: left + "px",top: top + "px",position: "fixed"});
  return jQuery(this);
};

jQuery.fn.viewerjsCreateOverlay = function () {
  if (!jQuery(this).hasClass('viewerjs-processed')) {
    jQuery(this).addClass('viewerjs-processed').click(function (e) {
      e.preventDefault();
      var id = jQuery(this).attr('data-viewerjs-overlay-id');
      // Create the background.
      var fog = jQuery('<div id="' + id + '-fog" class="viewerjs-overlay-fog"></div>');
      fog.appendTo("body").css({
        'top': '0px',
        'left': '0px',
        'width': jQuery('body').outerWidth(true) + 'px',
        'height': jQuery('body').outerHeight(true) + 'px',
        'position': 'fixed'
      });
      var overlay = jQuery('<div class="viewerjs-overlay-element"></div>').attr({
          id: id
        }).css({
          width: jQuery(this).attr('data-viewerjs-overlay-width'),
          height: jQuery(this).attr('data-viewerjs-overlay-height')
        });
      overlay.html('<iframe id="' + id + '-iframe" src="' + jQuery(this).attr('href') + '" width="' + jQuery(this).attr('data-viewerjs-overlay-width') + '" height="' + jQuery(this).attr('data-viewerjs-overlay-height') + '" allowfullscreen webkitallowfullscreen></iframe>');
      overlay.appendTo("body").viewerjsCenterElement();
      jQuery(fog).click(function(){
        jQuery(fog).remove();
        jQuery(overlay).remove();
      });
      return overlay;
    });
  }
};
/**/

/**/
jQuery(document).ready(function () {
  jQuery("a.viewerjs-overlay").viewerjsCreateOverlay();
});
