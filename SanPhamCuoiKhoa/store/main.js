document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    
    document.querySelectorAll(".nav a").forEach(item => {
        item.addEventListener("click", function() {
            const target = item.getAttribute("data-target");
            
            sections.forEach(section => section.style.display = "none");
            
            document.getElementById(target).style.display = "block";
        });
    });
});
