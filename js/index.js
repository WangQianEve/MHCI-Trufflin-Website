function expandNav(elem) {
    let nav_section = $(elem).parents('.nav-section');
    if (nav_section.hasClass('opened')) {
        nav_section.removeClass('opened');
    } else {
        nav_section.addClass('opened');
    }
}