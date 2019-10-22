$(document).ready(function () {

    if ($('.lead-slider').length > 0) {
        $('.lead-slider').bxSlider();

    }


    if ($('.team-slider').length > 0) {
        $('.team-slider').owlCarousel({
            items: 5,
            margin: 10,
            loop: true,
            stagePadding: 0,
            nav: true,
            navText: ['<span class="fas fa-arrow-circle-left"></span>', '<span class="fas fa-arrow-circle-right"></span>'],
            slideBy: 3,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    slideBy: 1,
                    margin: 0
                },
                400: {
                    items: 2,
                    dots: false,
                    slideBy: 2,
                    margin: 10
                },
                700: {
                    items: 3,
                    dots: true,
                    nav: false,
                    slideBy: 3,
                    margin: 10
                },
                1100: {
                    items: 5,
                    dots: true,
                    nav: true,
                    slideBy: 5,
                    margin: 10
                }
            }
        });
    }

    if ($('.animal-slider').length > 0) {
        $('.animal-slider').owlCarousel({
            items: 4,
            margin: 0,
            loop: true,
            stagePadding: 0,
            nav: true,
            navText: ['<span class="fas fa-arrow-circle-left"></span>', '<span class="fas fa-arrow-circle-right"></span>'],
            slideBy: 4,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
        });
    }


    if ($('.contact-form')) {
        $('.contact-form').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 6
                },
                repassword: {
                    required: true,
                    minlength: 6,
                    equalTo: '#password'
                },
                message: {
                    required: true,
                },
                city: {
                    required: true,
                },
                question1: {
                    required: true,
                },
                question2: {
                    required: true,
                }
            },
            messages:{
                name:{
                    required: 'The Name* field is required.',
                    minlength: 'The Name* field shold be min 3 caaracters long.'              
                 },
            },
            errorElement: 'p',
            errorPlacement: function(error, element) {
                error.appendTo( element.closest(".form-group").find(".error-msg") );
            }

        });
    }

});

