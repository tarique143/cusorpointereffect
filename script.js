// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    const cursorCircle = document.querySelector(".cursor-circle");

    // Function to move the cursor and circle
    const moveCursor = (e) => {
        gsap.to(cursor, {
            duration: 0.1,
            x: e.clientX,
            y: e.clientY
        });
        
        gsap.to(cursorCircle, {
            duration: 0.3,
            x: e.clientX,
            y: e.clientY
        });
    };

    // Event listener for mouse movement
    window.addEventListener("mousemove", moveCursor);
});
