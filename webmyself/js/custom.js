
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var p = document.getElementById("kot");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        p.value = p.value - 20;
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        p.value = p.value + 20;
    }

}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(b) {
    showSlides(slideIndex += b);
}
function currentSlide(b) {
    showSlides(slideIndex = b);
}
function showSlides(b) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (b > slides.length) { slideIndex = 1 }
    if (b < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}
