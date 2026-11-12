const gadgetsData = [
    { name: "Mallette de Terrain PIÉGÉE", movie: "Bons Baisers de Russie (1963)", feature: "Contient des pièces d'or, un fusil AR-7 démontable et une cartouche de gaz lacrymogène dissimulée.", photo: "assets/images/gadgets01.jpg" },
    { name: "Jetpack Bell Rocket Belt", movie: "Opération Tonnerre (1965)", feature: "Dossier réacteur individuel permettant à Bond de s'échapper par les airs d'un château français.", photo: "assets/images/gadgets02.jpg" },
    { name: "Respirateur Aquatique Miniature", movie: "Opération Tonnerre / Die Another Day", feature: "Fournit 4 minutes d'oxygène sous l'eau dans un format de la taille d'un cigare.", photo: "assets/images/gadgets03.jpg" },
    { name: "Autogire 'Little Nellie'", movie: "On ne vit que deux fois (1967)", feature: "Mini-hélicoptère démontable livré en valises, armé de lance-roquettes, mitrailleuses et lance-flammes.", photo: "assets/images/gadgets04.jpg" },
    { name: "Montre Rolex Submariner Magnétique", movie: "Vivre et laisser mourir (1973)", feature: "Intègre un puissant aimant capable de dévier une balle et une lunette crantée rotative servant de mini-scie.", photo: "assets/images/gadgets05.jpg" },
    { name: "Arbalète de Poignet Télécommandée", movie: "Moonraker (1979)", feature: "Fixée sous la manche, elle tire des fléchettes empoisonnées au cyanure ou perforantes.", photo: "assets/images/gadgets06.jpg" },
    { name: "Montre Seiko G757 Sports 100", movie: "Octopussy (1983)", feature: "Affichage numérique récepteur avec tracker radio pour suivre l'émetteur de la bombe.", photo: "assets/images/gadgets07.jpg" },
    { name: "Dentifrice Explosif 'Dentrise'", movie: "Permis de tuer (1989)", feature: "Explosif plastique C4 dissimulé dans un tube de dentifrice avec détonateur camouflé en paquet de cigarettes.", photo: "assets/images/gadgets08.jpg" },
    { name: "Stylo Parker 45 Explosif", movie: "GoldenEye (1995)", feature: "Charge d'explosif au pentrite déclenchée par 3 clics successifs du capuchon.", photo: "assets/images/gadgets09.jpg" },
    { name: "Montre Omega Seamaster Laser", movie: "GoldenEye & Tomorrow Never Dies", feature: "Laser à faisceau continu capable de découper une plaque d'acier blindé de train.", photo: "assets/images/gadgets10.jpg" },
    { name: "Lunettes à Rayons X", movie: "Le monde ne suffit pas (1999)", feature: "Permettent de voir à travers les vêtements pour repérer la présence d'armes cachées sous les vestes.", photo: "assets/images/gadgets11.jpg" },
    { name: "Bague Détonateur Ultrasonique", movie: "Meurs un autre jour (2002)", feature: "Émet une fréquence haute puissance capable de briser n'importe quel verre blindé en une seconde.", photo: "assets/images/gadgets12.jpg" },
    { name: "Défibrillateur de Bord & Antidote", movie: "Casino Royale (2006)", feature: "Intégré dans la boîte à gants de l'Aston Martin DBS pour sauver Bond d'un empoisonnement à la digitaline.", photo: "assets/images/gadgets13.jpg" },
    { name: "Génération EMP Impulsion Électromagnétique", movie: "Mourir peut attendre (2021)", feature: "Dispositif Omega Seamaster modifiée capable de griller instantanément tout circuit électronique à proximité.", photo: "assets/images/gadgets14.jpg" }
];

function renderGadgetsModule() {
    const container = document.getElementById('gadgetsContainer');
    if (!container) return;
    container.innerHTML = `
        <section id="gadgets" class="py-16 px-4 max-w-7xl mx-auto border-b border-bond-border">
            <h2 class="text-3xl font-bold text-white font-cinzel mb-8 text-center">LABORATOIRE GADGETS & HIGH-TECH Q BRANCH</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                ${gadgetsData.map(g => `
                    <div class="bg-bond-card border border-bond-border rounded p-4 flex flex-col justify-between gold-border-glow transition-all">
                        <div>
                            <div class="h-52 mb-3 bg-black rounded overflow-hidden flex items-center justify-center p-2">
                                <img src="${g.photo}" alt="${g.name}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/300x200/141414/c5a059?text=Gadget+Q'">
                            </div>
                            <span class="text-[10px] text-bond-gold font-bold uppercase tracking-widest block mb-1">${g.movie}</span>
                            <h3 class="font-bold text-white font-cinzel text-base mb-2">${g.name}</h3>
                            <p class="text-xs text-bond-muted leading-relaxed">${g.feature}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', renderGadgetsModule);