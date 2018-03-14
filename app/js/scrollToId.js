(function($) {
    $.fn.scrollToId = function(id, animation){
        $("#" + id).has(".animated").css("opacity", "0");
        this.scroll(function(){
            var scroll = $(window).scrollTop();
            var initialTopOffset = $('.main-header').offset().top;
            if ( $("#" + id).offset().top <= ($(window).outerHeight() + initialTopOffset) ) {
                $("#" + id).css("opacity", "1");
                $("#" + id).addClass('animating');
                $("#" + id).find(".animated").addClass(animation);
            }
        })
        this.scroll();
        return this;
    }
})(jQuery);