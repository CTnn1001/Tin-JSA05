const scrollToTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    scrollToTop();
});

function scrollToTop() {
    const scrollStep = -window.scrollY / 15; // số bước chân để chạy bo
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15); // thời gian nghĩ uống nước
}

