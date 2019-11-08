
function menuShow() {
    let x = document.getElementById('alt-id');
    if (x.className === 'alt-menu') {
        x.className += ' responsive';
    } else {
        x.className = 'alt-menu';
    }
    $('.con-icon').toggle();
    $('.icon').on('click', function() {
        if ($(this).css('border', 'none')) {
            $(this).css('border', '1px solid white');
        } else {
            $(this).css('border', 'none');
        } 
    });
 }



