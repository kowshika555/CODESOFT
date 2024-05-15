document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById("footer");
    var elements = footer.getElementsByTagName("i");
    for (var i = 0; i < elements.length - 1; i++) {
        var separator = document.createTextNode(" | ");
        footer.insertBefore(separator, elements[i+1]);
    }
});
