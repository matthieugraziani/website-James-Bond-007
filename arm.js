const armsData = [
    { name: "Walther PPK 9mm", type: "Arme de poing principale", desc: "Compacte et précise, l'arme officielle emblématique adoptée par 007 à la demande du MI6.", photo: "assets/images/arm01.jpg" },
    { name: "Walther P99", type: "Arme de poing tactique", desc: "Utilisée pendant l'ère Pierce Brosnan (GoldenEye, Demain ne meurt jamais).", photo: "assets/images/arm02.jpg" }
];

function renderArmsModule() {
    const container = document.getElementById('armesContainer');
    if (!container) return;
    container.innerHTML = `
        <section id="armes" class="py-16 px-4 max-w-7xl mx-auto border-b border-bond-border">
            <h2 class="text-3xl font-bold text-white font-cinzel mb-8 text-center">ARSENAL DU SERVICE SECRET</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                ${armsData.map(a => `
                    <div class="bg-bond-card border border-bond-border rounded p-4 text-center gold-border-glow transition-all">
                        <div class="h-48 bg-black rounded mb-3 overflow-hidden flex items-center justify-center p-2">
                            <img src="${a.photo}" alt="${a.name}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/400x300/141414/c5a059?text=${encodeURIComponent(a.name)}'">
                        </div>
                        <h3 class="font-bold text-white font-cinzel text-base">${a.name}</h3>
                        <p class="text-xs text-bond-gold font-semibold">${a.type}</p>
                        <p class="text-xs text-bond-muted mt-1">${a.desc}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}
document.addEventListener('DOMContentLoaded', renderArmsModule);