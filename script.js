
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter span");
  const circles = document.querySelectorAll(".progress-circle");

  counters.forEach((counter, index) => {
    const target = +counter.dataset.target;
    const circle = circles[index];

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    let current = 0;

    function animate() {
      if (current <= target) {
        counter.textContent = current;
        const offset = circumference - (circumference * current) / 100;
        circle.style.strokeDashoffset = offset;
        current++;
        requestAnimationFrame(animate);
      }
    }

    animate();
  });
});
