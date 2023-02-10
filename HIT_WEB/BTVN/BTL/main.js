function myFunction() {
    document.getElementById("drop-menu").classList.toggle("show");
}
console.log("OKE");
window.onclick = function (event) {
    if (!event.target.matches('.header-logo-menu i')) {
        var dropdowns = document.getElementsByClassName("menu-new");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('#travel__back').fadeIn();
        } else {
            $('#travel__back').fadeOut();
        }
    });
    $('#travel__back').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 100);
    })
})

$(document).ready(function () {
    $('.img-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 2000,
    })
});


$(document).ready(function () {
    $('.owl-product').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1500,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 1
            },
            767: {
                items: 2
            },
            960: {
                items: 3
            }
        }
    })
});
$(document).ready(function () {
    $('.owl-staff').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1500,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 1
            },
            767: {
                items: 2
            },
            960: {
                items: 3
            },
            1169: {
                items: 4
            }
        }
    })
});

$(document).ready(function () {
    $('.owl-product1').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1500,
        autoplayHoverPause: false,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 1
            },
            767: {
                items: 2
            },
            960: {
                items: 3
            },
            1169: {
                items: 4
            }
        }
    })
});

function closeVideo(idName1)
{
    let id1 = document.getElementById(idName1);
    id1.style.display = "none";
}

function display(idName)
{
    let id = document.getElementById(idName);
    id.style.display = "flex";
};

const body1 = document.body;
const mode1 = document.querySelector("#logo");
mode1.addEventListener('click', () =>{
    // alert("Bạn là ai?")
    body1.classList.toggle('dark')
})