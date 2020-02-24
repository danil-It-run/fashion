$('.navbar-toggler').on('click', function (e) {
    e.preventDefault();
    $('.navbar-toggler-icon').toggleClass('menu-active')
    $('.collapse').toggleClass('menu-active')
})