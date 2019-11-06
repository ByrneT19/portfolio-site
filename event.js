function menuShow() {
    let x = document.getElementById('alt-id');
    if (x.className === 'alt-menu') {
        x.className += ' responsive';
    } else {
        x.className = 'alt-menu';
    }
};

function menuClick() {
  $('this').on('click', function() {
    $('.hanBaoBao').hide();
  })
}

function menuItemsHide() {
  $('.proLink', '.aboutLink').on('click', function() {
    $('this').hide();
    $('.hanBaoBao').show();
  })
}

function pageLoad() {
  menuShow();
  menuClick();
  menuItemsHide();
}

$(pageLoad);