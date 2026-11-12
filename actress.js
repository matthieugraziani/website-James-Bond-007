const actressData = [
    { name: "Ursula Andress", character: "Honey Rider", film: "Dr. No (1962)", photo: "assets/images/fille01.jpg" },
    { name: "Daniela Bianchi", character: "Tatiana Romanova", film: "Bons Baisers de Russie (1963)", photo: "assets/images/fille02.jpg" },
    { name: "Honor Blackman", character: "Pussy Galore", film: "Goldfinger (1964)", photo: "assets/images/fille03.jpg" },
    { name: "Claudine Auger", character: "Domino Derval", film: "Opération Tonnerre (1965)", photo: "assets/images/fille04.jpg" },
    { name: "Mie Hama", character: "Kissy Suzuki", film: "On ne vit que deux fois (1967)", photo: "assets/images/fille05.jpg" },
    { name: "Diana Rigg", character: "Tracy di Vicenzo", film: "Au service secret de Sa Majesté (1969)", photo: "assets/images/fille06.jpg" },
    { name: "Jill St. John", character: "Tiffany Case", film: "Les diamants sont éternels (1971)", photo: "assets/images/fille07.jpg" },
    { name: "Jane Seymour", character: "Solitaire", film: "Vivre et laisser mourir (1973)", photo: "assets/images/fille08.jpg" },
    { name: "Britt Ekland", character: "Mary Goodnight", film: "L'homme au pistolet d'or (1974)", photo: "assets/images/fille09.jpg" },
    { name: "Barbara Bach", character: "Anya Amasova (Agent XXX)", film: "L'espion qui m'aimait (1977)", photo: "assets/images/fille10.jpg" },
    { name: "Lois Chiles", character: "Dr. Holly Goodhead", film: "Moonraker (1979)", photo: "assets/images/fille11.jpg" },
    { name: "Carole Bouquet", character: "Melina Havelock", film: "Rien que pour vos yeux (1981)", photo: "assets/images/fille12.jpg" },
    { name: "Maud Adams", character: "Octopussy", film: "Octopussy (1983)", photo: "assets/images/fille13.jpg" },
    { name: "Tanya Roberts", character: "Stacey Sutton", film: "Dangereusement vôtre (1985)", photo: "assets/images/fille14.jpg" },
    { name: "Maryam d'Abo", character: "Kara Milovy", film: "Tuer n'est pas jouer (1987)", photo: "assets/images/fille15.jpg" },
    { name: "Carey Lowell", character: "Pam Bouvier", film: "Permis de tuer (1989)", photo: "assets/images/fille16.jpg" },
    { name: "Izabella Scorupco", character: "Natalya Simonova", film: "GoldenEye (1995)", photo: "assets/images/fille17.jpg" },
    { name: "Michelle Yeoh", character: "Wai Lin", film: "Demain ne meurt jamais (1997)", photo: "assets/images/fille18.jpg" },
    { name: "Denise Richards", character: "Dr. Christmas Jones", film: "Le monde ne suffit pas (1999)", photo: "assets/images/fille19.jpg" },
    { name: "Halle Berry", character: "Giacinta 'Jinx' Johnson", film: "Meurs un autre jour (2002)", photo: "assets/images/fille20.jpg" },
    { name: "Eva Green", character: "Vesper Lynd", film: "Casino Royale (2006)", photo: "assets/images/fille21.jpg" },
    { name: "Olga Kurylenko", character: "Camille Montes", film: "Quantum of Solace (2008)", photo: "assets/images/fille22.jpg" },
    { name: "Bérénice Marlohe", character: "Sévérine", film: "Skyfall (2012)", photo: "assets/images/fille23.jpg" },
    { name: "Léa Seydoux", character: "Dr. Madeleine Swann", film: "007 Spectre (2015) & Mourir peut attendre", photo: "assets/images/fille24.jpg" },
    { name: "Ana de Armas", character: "Paloma", film: "Mourir peut attendre (2021)", photo: "assets/images/fille25.jpg" }
];

function renderActressModule() {
    const container = document.getElementById('actressContainer');
    if (!container) return;
    container.innerHTML = `
        <section id="actrices" class="py-16 px-4 max-w-7xl mx-auto border-b border-bond-border">
            <h2 class="text-3xl font-bold text-white font-cinzel mb-8 text-center">JAMES BOND GIRLS LÉGENDAIRES (25 FILMS)</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                ${actressData.map(ac => `
                    <div class="bg-bond-card border border-bond-border rounded p-4 text-center gold-border-glow transition-all">
                        <div class="h-64 mb-3 bg-black overflow-hidden rounded">
                            <img src="${ac.photo}" alt="${ac.name}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/400x600/141414/c5a059?text=${encodeURIComponent(ac.name)}'">
                        </div>
                        <h4 class="font-bold text-white font-cinzel text-sm line-clamp-1">${ac.name}</h4>
                        <p class="text-xs text-bond-gold font-semibold line-clamp-1">${ac.character}</p>
                        <span class="text-[10px] text-bond-muted block mt-1 line-clamp-1">${ac.film}</span>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}
document.addEventListener('DOMContentLoaded', renderActressModule);