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

$(document).ready(function(){
    $('.img-slider').owlCarousel({
        loop:true,
        items:1,
        nav:true,
        autoplay:true,
        autoplayTimeout:6000,
    })
  });


$(document).ready(function(){
    $('.owl-product').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        autoplayHoverPause:false,
        responsive:{
            0 : {
                items: 1
            }, 
            481: {
                items: 1
            },
            767:{
                items:2
            },
            960: {
                items: 3
            } 
        }
    })
  });
  $(document).ready(function(){
    $('.owl-staff').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        autoplayHoverPause:false,
        responsive:{
            0 : {
                items: 1
            }, 
            481: {
                items: 1
            },
            767:{
                items:2
            },
            960 : {
                items: 3
            },
            1169 : {
                items : 4
            }
        }
    })
  });
