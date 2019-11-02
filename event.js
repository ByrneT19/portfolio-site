projects = [
    {
    loc: <a href="https://github.com/ByrneT19/Quiz_App.git" target="_blank">Quiz App</a>,
    thumb: images/HK1.jpg
}
];

function loader() {
    $('.projects').on('click', function(event) {
        event.preventdefault();
        $('.locs').html
        (`${PROJECTS.loc},
        <img class="thumbs" 'src', ${PROJECTS.images/thumb}>`)
    })
}

$(window).on('scroll', function navScroll() {
    if($(window).scrollTop()) {
        $('nav').addClass('.stick');
    } else {
        $('nav');
    }
})
    

function loadPage() {
    navScroll();
}

$(loadPage);