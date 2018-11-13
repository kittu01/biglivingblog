$(document).ready(function () {

    $("#designSlider, #designSlider2 , #designSlider3 , #designSlider4").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
});


// ==sublist==
(function () {
    var icon = '<span class="mobile-icon"><span>+</span></span>';
    $(window).on('load ', function () {
        $('.category-bottom ul li a').each(function () {
            if ($(this).next('ul').length) {
                $(this).prepend(icon);
            }
        });
        $(function () {
            $('.category-bottom ul li a .mobile-icon').click(function (ev) {
                ev.preventDefault();
                // ADD ACTIVE CLASS
                $(this).parents(".down-list").find(".sublist").toggleClass("active");
                // CHANGE HTML

                if ($('span', this).html() == '+') {
                    $('span', this).html('-');
                    $(this).parent().next().slideDown('fast');
                } else {
                    $(this).parent().parent().find('ul').slideUp('fast', function () {
                        $(this).parent().parent().find('.mobile-icon span').html('+');
                        $(this).parent().parent().find('li').removeClass("active");
                    });
                }
            });
        });
    });
})();

// ===practice==
<button type="button" onclick="document.getElementById('data').innerHTML = Date()"> click to displaY DATE and time </button>