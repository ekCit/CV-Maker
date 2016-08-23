// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

jQuery(document).ready(function($) {
    $(".left-label").attr('contenteditable', 'true');
    $(".label-value").attr('contenteditable', 'true');
    $(".info-title").attr('contenteditable', 'true');
    $(".right-list h3").attr('contenteditable', 'true');
    $(".right-list p").attr('contenteditable', 'true');
    $(".right-paragraph p").attr('contenteditable', 'true');
    var portrait_modal = $('[data-remodal-id=portrait-modal]').remodal();
    $(".portrait").click(function(event) {
        portrait_modal.open();
    });
    $('[data-remodal-id=portrait-modal] button').click(function(event) {
        $(".portrait").css('background-image', 'url("{0}")'.format($("#avatar-url").val()));
    });
    var weixin_modal = $('[data-remodal-id=weixin-modal]').remodal();
    $(".weixin").click(function(event) {
        weixin_modal.open();
    });
    $('[data-remodal-id=weixin-modal] button').click(function(event) {
        $(".weixin img").attr('src', $("#weixin-url").val());
    });

    $('.info-header').hover(function() {
        /* Stuff to do when the mouse enters the element */

    }, function() {
        /* Stuff to do when the mouse leaves the element */

    });
});