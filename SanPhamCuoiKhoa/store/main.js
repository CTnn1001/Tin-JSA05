document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    
    document.querySelectorAll(".nav a").forEach(item => {
        item.addEventListener("click", function() {
            const target = item.getAttribute("data-target");
            
            // Ẩn tất cả các phần nội dung
            sections.forEach(section => section.style.display = "none");
            
            // Hiển thị phần nội dung tương ứng
            document.getElementById(target).style.display = "block";
        });
    });
});
