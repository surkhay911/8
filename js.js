window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

