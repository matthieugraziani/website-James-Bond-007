const alliesData = [
    { name: "M (Bernard Lee)", role: "Directeur du MI6 (1962–1979)", actor: "Bernard Lee", photo: "assets/images/allies01.jpg" },
    { name: "M (Judi Dench)", role: "Directrice du MI6 (1995–2012)", actor: "Judi Dench", photo: "assets/images/allies02.jpg" },
    { name: "M (Gareth Mallory)", role: "Directeur du MI6 (2012–2021)", actor: "Ralph Fiennes", photo: "assets/images/allies03.jpg" },
    { name: "Q (Major Boothroyd)", role: "Chef Q Branch (1963–1999)", actor: "Desmond Llewelyn", photo: "assets/images/allies04.jpg" },
    { name: "Q (John Cleese)", role: "Chef Q Branch (1999–2002)", actor: "John Cleese", photo: "assets/images/allies05.jpg" },
    { name: "Q (Ben Whishaw)", role: "Génie informatique Q Branch (2012–2021)", actor: "Ben Whishaw", photo: "assets/images/allies06.jpg" },
    { name: "Miss Moneypenny (Lois Maxwell)", role: "Secrétaire de M (1962–1985)", actor: "Lois Maxwell", photo: "assets/images/allies07.jpg" },
    { name: "Miss Moneypenny (Naomie Harris)", role: "Agente de terrain & Secrétaire (2012–2021)", actor: "Naomie Harris", photo: "assets/images/allies08.jpg" },
    { name: "Felix Leiter", role: "Agent de liaison CIA (Saga)", actor: "Jeffrey Wright / Jack Lord", photo: "assets/images/allies09.jpg" },
    { name: "Bill Tanner", role: "Chef d'état-major du MI6", actor: "Rory Kinnear / Michael Kitchen", photo: "assets/images/allies10.jpg" },
    { name: "Nomi (Agent 000)", role: "Agente Double-0 du MI6", actor: "Lashana Lynch", photo: "assets/images/allies11.jpg" },
    { name: "Jack Wade", role: "Agent excentrique de la CIA", actor: "Joe Don Baker", photo: "assets/images/allies12.jpg" }
];

function renderAlliesModule() {
    const container = document.getElementById('alliesContainer');
    if (!container) return;
    container.innerHTML = `
        <section id="allies" class="py-16 px-4 max-w-7xl mx-auto border-b border-bond-border">
            <h2 class="text-3xl font-bold text-white font-cinzel mb-8 text-center">ÉTAT-MAJOR & ALLIÉS DU MI6</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${alliesData.map(al => `
                    <div class="bg-bond-card border border-bond-border rounded p-4 text-center gold-border-glow transition-all">
                        <div class="h-64 mb-3 bg-black rounded overflow-hidden flex items-center justify-center p-2">
                            <img src="${al.photo}" alt="${al.name}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/400x600/141414/c5a059?text=${encodeURIComponent(al.name)}'">
                        </div>
                        <h4 class="font-bold text-white font-cinzel">${al.name}</h4>
                        <p class="text-xs text-bond-gold font-semibold">${al.role}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}
document.addEventListener('DOMContentLoaded', renderAlliesModule);