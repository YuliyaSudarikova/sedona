var link = document.querySelector(".btn-brown-search");
var popup = document.querySelector(".form-search-sedona");
var close = popup.querySelector(".modal-content-close");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("hide");
});

