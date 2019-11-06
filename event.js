function menuShow() {
    let x = document.getElementById('.alt-id');
    if (x.className === '.alt-menu') {
        x.className += ' responsive';
    } else {
        x.className = '.alt-menu';
    }
};

/*function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }*/