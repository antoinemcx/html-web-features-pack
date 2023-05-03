// ##### Alternative without jQuery #####
    // const backToTop = document.getElementById('back2Top');

    // function fadeIn(elem) { elem.style.display = "block" }
    // function fadeOut(elem) { elem.style.display = "none" }

    // window.onscroll = async function() {
    //     var height = window.pageYOffset;
    //     if (height > 100) {
    //         fadeIn(backToTop)
    //     } else {
    //         fadeOut(backToTop);
    //     }
    // };

    // document.ready(function() {
    //     backToTop.click(function(event) {
    //         event.preventDefault();
    //         document.querySelector("html, body").animate({ scrollTop: 0 }, "slow");
    //         return false;
    //     });
    // });

const backToTop = $('#back2Top');

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        backToTop.fadeIn();
    } else {
        backToTop.fadeOut();
    }
});
$(document).ready(function() {
    backToTop.click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});