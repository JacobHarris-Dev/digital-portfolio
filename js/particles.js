const container = document.getElementById("particles");
const particleCount = 40;
const particles = [];
const mouse = { x: null, y: null };

for (let i = 0; i < particleCount; i++) {
    const el = document.createElement("div");
    el.classList.add("particle");

    const p = {
        el,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 2
    };

    el.style.width = el.style.height = `${p.size}px`;
    container.appendChild(el);
    particles.push(p);
}

window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function animate() {
    particles.forEach(p => {
        // float motion
        p.x += p.vx;
        p.y += p.vy;

        // wrap edges
        if (p.x < 0) p.x = window.innerWidth;
        if (p.x > window.innerWidth) p.x = 0;
        if (p.y < 0) p.y = window.innerHeight;
        if (p.y > window.innerHeight) p.y = 0;

        // cursor interaction
        if (mouse.x && mouse.y) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
                p.x += dx * 0.02;
                p.y += dy * 0.02;
            }
        }

        p.el.style.transform = `translate(${p.x}px, ${p.y}px)`;
    });

    requestAnimationFrame(animate);
}

animate();
