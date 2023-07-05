AOS.init({
    disable: 'mobile',
    once: true,
});

var typed = new Typed('.span-off', {
    strings: ['A melhor do brasil!', 'Bem-Vindo A Latency!', 'Farpa não bb'],
    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
});

function remove_hash() {
    setTimeout(() => {
        history.replaceState({}, document.title, ".");
    }, 5);
}

// var scroll = $(window).scrollTop();
// if (scroll > 70) {
//     $("#navbar").addClass("active");
// } else {
//     $("#navbar").removeClass("active");
// }

function change_nav(tab) {
    remove_hash();
    if (tab == 1) {
        $(window).scrollTop(0);
    } else if (tab == 2) {
        $(window).scrollTop($("#pq-mycheats").offset().top - 200);
    } else if (tab == 3) {
        $(window).scrollTop($("#produtos-mych").offset().top - 100);
    } else if (tab == 4) {
        $(window).scrollTop($("#produtos-mych .faq").offset().top - 300);
    } else if (tab == 5) {
        $(window).scrollTop($("#youtubemych").offset().top - 300);
    } else if (tab == 6) {
        $(window).scrollTop($("body").height());
    }
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 70) {
        $("#navbar").addClass("active");
    } else {
        $("#navbar").removeClass("active");
    }
});
