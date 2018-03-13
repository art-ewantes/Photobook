(function($) {
    $.fn.scrollToId = function(id, animation){
        this.scroll(function(){
            var scroll = $(window).scrollTop();
            var initialTopOffset = $('.main-header').offset().top;
            // console.log(initialTopOffset)
            if ($("#" + id).offset().top <= ( $(window).outerHeight() + initialTopOffset)) {
                $("#" + id).css("opacity", "1");
                $("#" + id).addClass('animating');
                $("#" + id).find(".animated").addClass(animation);
            }
        })
        this.scroll();
        return this;
    }
   
})(jQuery);