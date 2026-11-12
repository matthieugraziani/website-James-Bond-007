const vehiclesData = [
    { name: "Aston Martin DB5", movie: "Goldfinger (1964) & saga", desc: "La voiture la plus célèbre du cinéma : siège éjectable, mitrailleuses avant, plaque tournantes et écran fumigène.", photo: "assets/images/car01.jpg" },
    { name: "Toyota 2000GT Convertible", movie: "On ne vit que deux fois (1967)", desc: "Modèle unique créé sur mesure sans toit en deux semaines pour accueillir Sean Connery au Japon.", photo: "assets/images/car02.jpg" },
    { name: "Ford Mustang Mach 1", movie: "Les diamants sont éternels (1971)", desc: "Célèbre pour sa cascade spectaculaire sur deux roues traversant une ruelle étroite à Las Vegas.", photo: "assets/images/car03.jpg" },
    { name: "AMC Hornet Hatchback", movie: "L'homme au pistolet d'or (1974)", desc: "Auteur du mythique saut vrillé à 360° par-dessus une rivière en Thaïlande.", photo: "assets/images/car04.jpg" },
    { name: "Lotus Esprit S1 'Wet Nellie'", movie: "L'espion qui m'aimait (1977)", desc: "Capacité légendaire de conversion sous-marine avec missiles antiaériens et lances-torpilles.", photo: "assets/images/car05.jpg" },
    { name: "Citroën 2CV", movie: "Rien que pour vos yeux (1981)", desc: "Utilisée lors d'une poursuite épique et rocambolesque à travers les oliviers en Espagne.", photo: "assets/images/car06.jpg" },
    { name: "Bede BD-5J Microjet", movie: "Octopussy (1983)", desc: "Le plus petit jet monoplace au monde, dissimulé dans une remorque à cheval.", photo: "assets/images/car07.jpg" },
    { name: "Rolls-Royce Silver Cloud II", movie: "Dangereusement vôtre (1985)", desc: "Voiture personnelle du producteur Cubby Broccoli, conduite par Patrick Macnee dans le film.", photo: "assets/images/car08.jpg" },
    { name: "Aston Martin V8 Volante", movie: "Tuer n'est pas jouer (1987)", desc: "Équipée de skis escamotables latéraux, lasers de roues et rétro-propulseur fusée.", photo: "assets/images/car09.jpg" },
    { name: "Camion Kenworth W900B", movie: "Permis de tuer (1989)", desc: "Conduit sur ses roues latérales pour esquiver un missile téléguidé.", photo: "assets/images/car10.jpg" },
    { name: "BMW Z3", movie: "GoldenEye (1995)", desc: "Le premier véhicule de fonction allemand de 007, équipé de missiles stinger cachés derrière les phares.", photo: "assets/images/car11.jpg" },
    { name: "BMW 750iL", movie: "Demain ne meurt jamais (1997)", desc: "Entièrement télécommandée depuis un téléphone portable Ericsson, équipée de crevaison automatique et diffuseur de gaz.", photo: "assets/images/car12.jpg" },
    { name: "BMW Z8", movie: "Le monde ne suffit pas (1999)", desc: "Dotée de missiles sol-air rétractables sous les ouïes latérales, coupée en deux par une scie d'hélicoptère.", photo: "assets/images/car13.jpg" },
    { name: "Aston Martin V12 Vanquish 'Adaptative Camouflage'", movie: "Meurs un autre jour (2002)", desc: "Surnommée 'Vanish' en raison de son camouflage optique actif la rendant quasi-invisible.", photo: "assets/images/car14.jpg" },
    { name: "Jaguar C-X75", movie: "007 Spectre (2015)", desc: "Supercar hybride conduite par Hinx lors d'une poursuite nocturne survoltée dans les rues de Rome.", photo: "assets/images/car15.jpg" },
    { name: "Aston Martin Valhalla", movie: "Mourir peut attendre (2021)", desc: "Supercar à moteur central marquant la nouvelle ère technologique du MI6.", photo: "assets/images/car16.jpg" }
];

function renderVehiclesModule() {
    const container = document.getElementById('vehiculesContainer');
    if (!container) return;
    container.innerHTML = `
        <section id="vehicules" class="py-16 px-4 max-w-7xl mx-auto border-b border-bond-border">
            <h2 class="text-3xl font-bold text-white font-cinzel mb-8 text-center">FLOTTE ET VÉHICULES CULTES DE 007</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${vehiclesData.map(v => `
                    <div class="bg-bond-card border border-bond-border rounded p-4 gold-border-glow transition-all flex flex-col justify-between">
                        <div>
                            <div class="h-48 mb-3 bg-black overflow-hidden rounded flex items-center justify-center p-2">
                                <img src="${v.photo}" alt="${v.name}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/600x400/141414/c5a059?text=${encodeURIComponent(v.name)}'">
                            </div>
                            <h3 class="font-bold text-white font-cinzel text-base">${v.name}</h3>
                            <span class="text-xs text-bond-gold font-semibold block mb-2">${v.movie}</span>
                            <p class="text-xs text-bond-muted leading-relaxed">${v.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', renderVehiclesModule);