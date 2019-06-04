function rakdbe() {
    var linkbe = document.getElementById("link").value;
    document.querySelector('span.ide').innerHTML = document.querySelector('span.ide').innerHTML + '<li id="' + linkbe + '">' + '<a href="' + linkbe + '" target="_blank">' + linkbe + '</a>' + '</li>';
}

function veddki() {
    var linkki = document.getElementById("link").value;
    document.getElementById(linkki).remove();
}