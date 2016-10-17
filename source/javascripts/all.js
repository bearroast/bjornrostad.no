//= require vendor/jquery
//= require vendor/flickity.pkgd.min
//= require vendor/modernizr-custom.min

// Initiate fullscreen nav
$(function() {
    $('.toggle-nav').click(function() {
        if ($('body').hasClass('show-nav')) {
            $('body').removeClass('show-nav').addClass('hide-nav');
            setTimeout(function() {
                $('body').removeClass('hide-nav');
            }, 1500);
        } else {
            $('body').removeClass('hide-nav').addClass('show-nav');
        }
        return false;
    });
});
