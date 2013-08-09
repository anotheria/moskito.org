$(document).ready(function() {

    $("#carousel").carouFredSel({
        scroll: {
            fx: "crossfade",
            duration: 1000,
            timeoutDuration: 7000
        },
        auto: {
            pauseOnHover: 'resume'
        },
        prev: {
            button: "#carouselPrev",
            key: "left"
        },
        next: {
            button: "#carouselNext",
            key	: "right"
        }
    });

    $(".features-list ul").carouFredSel({
        width   : "100%",
        items	: 3,
        scroll	: {
            items: 2,
            duration: 1000,
            timeoutDuration: 7000
        },
        auto    : {
            pauseOnHover: 'resume'
        },
        swipe: {
            onTouch: true,
            onMouse: true
        },
        pagination  : ".features-pagination"
    });

    $(window).resize(function(){
        $(".features-list ul").carouFredSel({
            width   : "100%",
            items	: 3,
            scroll	: {
                items: 2,
                duration: 1000,
                timeoutDuration: 7000
            },
            auto    : {
                pauseOnHover: 'resume'
            },
            swipe: {
                onTouch: true,
                onMouse: true
            },
            pagination  : ".features-pagination"
        });
        if ($(window).width() < 979) {
            $(".features-list ul").carouFredSel({
                width   : "100%",
                items	: 2,
                scroll	: {
                    items: 2,
                    duration: 1000,
                    timeoutDuration: 7000
                },
                auto    : {
                    pauseOnHover: 'resume'
                },
                swipe: {
                    onTouch: true,
                    onMouse: true
                },
                pagination  : ".features-pagination"
            });
        }
        if ($(window).width() < 768) {
            $(".features-list ul").carouFredSel({
                width   : "100%",
                items	: 2,
                scroll	: {
                    items: 2,
                    duration: 1000,
                    timeoutDuration: 7000
                },
                auto    : {
                    pauseOnHover: 'resume'
                },
                swipe: {
                    onTouch: true,
                    onMouse: true
                },
                pagination  : ".features-pagination"
            });
        }
    });

    if ($(window).width() < 979) {
        $(".features-list ul").carouFredSel({
            width   : "100%",
            items	: 2,
            scroll	: {
                items: 2,
                duration: 1000,
                timeoutDuration: 7000
            },
            auto    : {
                pauseOnHover: 'resume'
            },
            swipe: {
                onTouch: true,
                onMouse: true
            },
            pagination  : ".features-pagination"
        });
    }
    if ($(window).width() < 768) {
        $(".features-list ul").carouFredSel({
            width   : "100%",
            items	: 2,
            scroll	: {
                items: 2,
                duration: 1000,
                timeoutDuration: 7000
            },
            auto    : {
                pauseOnHover: 'resume'
            },
            swipe: {
                onTouch: true,
                onMouse: true
            },
            pagination  : ".features-pagination"
        });
    }

});