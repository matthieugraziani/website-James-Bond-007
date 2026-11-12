const actorsData = [
    { name: "Sean Connery", period: "1962–1971", films: ["Dr. No", "Bons Baisers de Russie", "Goldfinger", "Opération Tonnerre", "On ne vit que deux fois", "Les diamants sont éternels"], photo: "assets/images/sean-connery-007.jpg" },
    { name: "George Lazenby", period: "1969", films: ["Au service secret de Sa Majesté"], photo: "assets/images/george-lazenby-007.jpg" },
    { name: "Roger Moore", period: "1973–1985", films: ["Vivre et laisser mourir", "L'homme au pistolet d'or", "L'espion qui m'aimait", "Moonraker", "Rien que pour vos yeux", "Octopussy", "Dangereusement vôtre"], photo: "assets/images/roger-moore-007.jpg" },
    { name: "Timothy Dalton", period: "1987–1989", films: ["Tuer n'est pas jouer", "Permis de tuer"], photo: "assets/images/timothy-dalton-007.jpg" },
    { name: "Pierce Brosnan", period: "1995–2002", films: ["GoldenEye", "Demain ne meurt jamais", "Le monde ne suffit pas", "Meurs un autre jour"], photo: "assets/images/pierce-brosnan-007.jpg" },
    { name: "Daniel Craig", period: "2006–2021", films: ["Casino Royale", "Quantum of Solace", "Skyfall", "007 Spectre", "Mourir peut attendre"], photo: "assets/images/daniel-craig-007.jpg" }
];

function renderActorsModule() {
    const container = document.getElementById('actorsContainer');
    if (!container) return;
    container.innerHTML = `
        <section id="acteurs" class="py-16 px-4 max-w-7xl mx-auto border-b border-bond-border">
            <h2 class="text-3xl font-bold text-white font-cinzel mb-8 text-center">LES 6 ACTEURS DE LA SAGA</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                ${actorsData.map(a => `
                    <div class="bg-bond-card border border-bond-border rounded p-3 gold-border-glow transition-all duration-300 flex flex-col justify-between text-center">
                        <div class="h-56 mb-3 bg-black overflow-hidden rounded relative flex items-center justify-center">
                            <img src="${a.photo}" alt="${a.name}" class="w-full h-full object-contain p-1" onerror="this.src='https://placehold.co/400x600/141414/c5a059?text=${encodeURIComponent(a.name)}'">
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-white font-cinzel line-clamp-1">${a.name}</h3>
                            <p class="text-[11px] text-bond-gold mb-2 font-semibold">${a.period}</p>
                            <ul class="text-[10px] text-bond-muted space-y-0.5 text-left hidden sm:block">
                                ${a.films.slice(0, 2).map(f => `<li class="truncate">• ${f}</li>`).join('')}
                                ${a.films.length > 2 ? `<li class="text-[9px] text-bond-gold">+${a.films.length - 2} autres</li>` : ''}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderActorsModule);
} else {
    renderActorsModule();
}