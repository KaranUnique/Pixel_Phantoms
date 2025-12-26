document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('python-content');
    if (!container) return; // Prevention: stop if container is missing

    // 1. Clear loading state
    container.innerHTML = ''; 

    // 2. Inject Chapters
    pythonData.chapters.forEach((ch, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        const node = document.createElement('div');
        node.className = `chapter-node ${side}`;
        node.style.opacity = "0"; // Start invisible for GSAP
        node.innerHTML = `
            <h3>${ch.title}</h3>
            <p>${ch.desc}</p>
            <button class="toggle-btn" onclick="toggleDetails(this)">+</button>
            <div class="chapter-details">
                ${ch.modules.map(m => `<a href="#" class="module-link">> ${m}</a>`).join('')}
            </div>
        `;
        container.appendChild(node);
    });

    // 3. Initialize Animations ONLY after content is in the DOM
    gsap.to(".chapter-node", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
    });
});