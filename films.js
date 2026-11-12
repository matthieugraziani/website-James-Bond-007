// --- FILMOGRAPHIE COMPLÈTE & LOGIQUE AUDIO ---
const filmsData = [
    {
        id: 1,
        title: "Dr. No",
        year: 1962,
        actor: "Sean Connery",
        director: "Terence Young",
        girl: "Honey Rider (Ursula Andress)",
        villain: "Dr. Julius No",
        gadget: "Compteur Geiger dosimétrique",
        song: "James Bond Theme (Monty Norman)",
        boxoffice: "59,6 M$",
        synopsis: "James Bond s'envole pour la Jamaïque afin d'enquêter sur la disparition mystérieuse d'un agent du MI6 et déjoue les plans du sinistre Dr. No.",
        poster: "assets/images/film01.jpg",
        official: true,
        decade: "60s"
    },
    {
        id: 2,
        title: "Bons Baisers de Russie",
        year: 1963,
        actor: "Sean Connery",
        director: "Terence Young",
        girl: "Tatiana Romanova (Daniela Bianchi)",
        villain: "Rosa Klebb & Red Grant",
        gadget: "Mallette piégée de Q Branch",
        song: "From Russia with Love (Matt Monro)",
        boxoffice: "78,9 M$",
        synopsis: "007 est envoyé à Istanbul pour récupérer une machine de déchiffrement soviétique Lektor, pris dans un piège tendu par le SPECTRE.",
        poster: "assets/images/film02.jpg",
        official: true,
        decade: "60s"
    },
    {
        id: 3,
        title: "Goldfinger",
        year: 1964,
        actor: "Sean Connery",
        director: "Guy Hamilton",
        girl: "Pussy Galore (Honor Blackman)",
        villain: "Auric Goldfinger & Oddjob",
        gadget: "Aston Martin DB5 (Siège éjectable & mitrailleuses)",
        song: "Goldfinger (Shirley Bassey)",
        boxoffice: "124,9 M$",
        synopsis: "Bond enquête sur le magnat Auric Goldfinger qui projette d'irradier la réserve d'or américaine de Fort Knox.",
        poster: "assets/images/film03.jpg",
        official: true,
        decade: "60s"
    },
    {
        id: 4,
        title: "Opération Tonnerre",
        year: 1965,
        actor: "Sean Connery",
        director: "Terence Young",
        girl: "Domino Derval (Claudine Auger)",
        villain: "Emilio Largo (SPECTRE N°2)",
        gadget: "Jetpack Bell Rocket & Respirateur aquatique",
        song: "Thunderball (Tom Jones)",
        boxoffice: "141,2 M$",
        synopsis: "Le SPECTRE détourne deux bombes nucléaires. Bond plonge au cœur des Bahamas pour stopper le chantage atomique.",
        poster: "assets/images/film04.jpg",
        official: true,
        decade: "60s"
    },
    {
        id: 5,
        title: "On ne vit que deux fois",
        year: 1967,
        actor: "Sean Connery",
        director: "Lewis Gilbert",
        girl: "Aki & Kissy Suzuki",
        villain: "Ernst Stavro Blofeld",
        gadget: "Autogire armé 'Little Nellie'",
        song: "You Only Live Twice (Nancy Sinatra)",
        boxoffice: "111,6 M$",
        synopsis: "007 simule sa mort et s'infiltre au Japon dans le repaire volcanique secrètement aménagé par le SPECTRE.",
        poster: "assets/images/film05.jpg",
        official: true,
        decade: "60s"
    },
    {
        id: 6,
        title: "Au service secret de Sa Majesté",
        year: 1969,
        actor: "George Lazenby",
        director: "Peter R. Hunt",
        girl: "Tracy di Vicenzo (Diana Rigg)",
        villain: "Ernst Stavro Blofeld",
        gadget: "Décodeur de coffre-fort portable",
        song: "We Have All the Time in the World (Louis Armstrong)",
        boxoffice: "64,6 M$",
        synopsis: "James Bond traque Blofeld dans un sanatorium des Alpes suisses et vit une romance passionnée et tragique avec la comtesse Tracy.",
        poster: "assets/images/film06.jpg",
        official: true,
        decade: "60s"
    },
    {
        id: 7,
        title: "Les diamants sont éternels",
        year: 1971,
        actor: "Sean Connery",
        director: "Guy Hamilton",
        girl: "Tiffany Case (Jill St. John)",
        villain: "Blofeld, Mr. Wint & Mr. Kidd",
        gadget: "Module lunaire & Scanner d'empreinte",
        song: "Diamonds Are Forever (Shirley Bassey)",
        boxoffice: "116 M$",
        synopsis: "À Las Vegas, Bond découvre un trafic de diamants mondial destiné à la création d'un satellite laser destructeur.",
        poster: "assets/images/film07.jpg",
        official: true,
        decade: "70s"
    },
    {
        id: 8,
        title: "Vivre et laisser mourir",
        year: 1973,
        actor: "Roger Moore",
        director: "Guy Hamilton",
        girl: "Solitaire (Jane Seymour)",
        villain: "Dr. Kananga / Mr. Big",
        gadget: "Montre Rolex avec électro-aimant & scie",
        song: "Live and Let Die (Paul McCartney & Wings)",
        boxoffice: "161,8 M$",
        synopsis: "Pour sa première mission, Roger Moore affronte un baron de la drogue adepte du vaudou entre New York et les bayous de Louisiane.",
        poster: "assets/images/film08.jpg",
        official: true,
        decade: "70s"
    },
    {
        id: 9,
        title: "L'homme au pistolet d'or",
        year: 1974,
        actor: "Roger Moore",
        director: "Guy Hamilton",
        girl: "Mary Goodnight (Britt Ekland)",
        villain: "Francisco Scaramanga & Tric-Trac",
        gadget: "AMC Matador transformable en avion",
        song: "The Man with the Golden Gun (Lulu)",
        boxoffice: "97,6 M$",
        synopsis: "Le tueur le plus redoutable du monde vise 007 avec sa balle en or gravée. Un duel à mort s'engage en Mer de Chine.",
        poster: "assets/images/film09.jpg",
        official: true,
        decade: "70s"
    },
    {
        id: 10,
        title: "L'espion qui m'aimait",
        year: 1977,
        actor: "Roger Moore",
        director: "Lewis Gilbert",
        girl: "Anya Amasova / Agent XXX (Barbara Bach)",
        villain: "Karl Stromberg & Requin (Jaws)",
        gadget: "Lotus Esprit S1 Submersible (Wet Nellie)",
        song: "Nobody Does It Better (Carly Simon)",
        boxoffice: "185,4 M$",
        synopsis: "James Bond s'associe à une agente soviétique pour contrer un mégalomane marin voulant créer une cité sous-marine.",
        poster: "assets/images/film10.jpg",
        official: true,
        decade: "70s"
    },
    {
        id: 11,
        title: "Moonraker",
        year: 1979,
        actor: "Roger Moore",
        director: "Lewis Gilbert",
        girl: "Dr. Holly Goodhead (Lois Chiles)",
        villain: "Hugo Drax & Requin",
        gadget: "Arbalète de poignet télécommandée",
        song: "Moonraker (Shirley Bassey)",
        boxoffice: "210,3 M$",
        synopsis: "Suite au vol d'une navette spatiale, Bond traque Hugo Drax jusqu'à sa station spatiale secrète.",
        poster: "assets/images/film11.jpg",
        official: true,
        decade: "70s"
    },
    {
        id: 12,
        title: "Rien que pour vos yeux",
        year: 1981,
        actor: "Roger Moore",
        director: "John Glen",
        girl: "Melina Havelock (Carole Bouquet)",
        villain: "Aris Kristatos",
        gadget: "Système d'identification d'empreintes",
        song: "For Your Eyes Only (Sheena Easton)",
        boxoffice: "195,3 M$",
        synopsis: "Retour aux sources pour 007 qui doit retrouver un émetteur de codage ATAC coulé au large de la Grèce.",
        poster: "assets/images/film12.jpg",
        official: true,
        decade: "80s"
    },
    {
        id: 13,
        title: "Octopussy",
        year: 1983,
        actor: "Roger Moore",
        director: "John Glen",
        girl: "Octopussy (Maud Adams)",
        villain: "Général Orlov & Kamal Khan",
        gadget: "Mini-jet Bede BD-5J repliable",
        song: "All Time High (Rita Coolidge)",
        boxoffice: "187,5 M$",
        synopsis: "L'assassinat de l'agent 009 mène Bond à une conspiration soviétique visant à faire exploser une bombe atomique sur une base de l'OTAN.",
        poster: "assets/images/film13.jpg",
        official: true,
        decade: "80s"
    },
    {
        id: 14,
        title: "Dangereusement vôtre",
        year: 1985,
        actor: "Roger Moore",
        director: "John Glen",
        girl: "Stacey Sutton (Tanya Roberts)",
        villain: "Max Zorin & May Day",
        gadget: "Robot espion miniature télécommandé",
        song: "A View to a Kill (Duran Duran)",
        boxoffice: "152,4 M$",
        synopsis: "Bond affronte un psychopathe issu d'expériences nazies déterminé à engloutir la Silicon Valley sous les eaux.",
        poster: "assets/images/film14.jpg",
        official: true,
        decade: "80s"
    },
    {
        id: 15,
        title: "Tuer n'est pas jouer",
        year: 1987,
        actor: "Timothy Dalton",
        director: "John Glen",
        girl: "Kara Milovy (Maryam d'Abo)",
        villain: "Général Koskov & Brad Whitaker",
        gadget: "Aston Martin V8 Volante avec lasers",
        song: "The Living Daylights (a-ha)",
        boxoffice: "191,2 M$",
        synopsis: "Timothy Dalton apporte un réalisme brut au rôle, aidant un général soviétique transfuge dans une intrigue de trafic d'armes.",
        poster: "assets/images/film15.jpg",
        official: true,
        decade: "80s"
    },
    {
        id: 16,
        title: "Permis de tuer",
        year: 1989,
        actor: "Timothy Dalton",
        director: "John Glen",
        girl: "Pam Bouvier (Carey Lowell)",
        villain: "Franz Sanchez (Robert Davi)",
        gadget: "Explosif plastique en dentifrice",
        song: "Licence to Kill (Gladys Knight)",
        boxoffice: "156,2 M$",
        synopsis: "Privé de son matricule par M, Bond mène une vengeance en solo dévastatrice contre le baron de la drogue ayant mutilé son ami Felix Leiter.",
        poster: "assets/images/film16.jpg",
        official: true,
        decade: "80s"
    },
    {
        id: 17,
        title: "GoldenEye",
        year: 1995,
        actor: "Pierce Brosnan",
        director: "Martin Campbell",
        girl: "Natalya Simonova (Izabella Scorupco)",
        villain: "Alec Trevelyan (006) & Xenia Onatopp",
        gadget: "Stylo Parker explosif & Montre Omega Laser",
        song: "GoldenEye (Tina Turner)",
        boxoffice: "356,4 M$",
        synopsis: "Relance spectaculaire de la saga. Bond combat son ancien ami et agent 006 qui a pris le contrôle du système d'arme spatiale GoldenEye.",
        poster: "assets/images/film17.jpg",
        official: true,
        decade: "90s"
    },
    {
        id: 18,
        title: "Demain ne meurt jamais",
        year: 1997,
        actor: "Pierce Brosnan",
        director: "Roger Spottiswoode",
        girl: "Wai Lin (Michelle Yeoh)",
        villain: "Elliot Carver (Jonathan Pryce)",
        gadget: "Téléphone Ericsson télécommandant la BMW 750i",
        song: "Tomorrow Never Dies (Sheryl Crow)",
        boxoffice: "333 M$",
        synopsis: "Un magnat de la presse tente d'orchestrer un conflit armé entre la Chine et le Royaume-Uni pour obtenir l'exclusivité médiatique.",
        poster: "assets/images/film18.jpg",
        official: true,
        decade: "90s"
    },
    {
        id: 19,
        title: "Le monde ne suffit pas",
        year: 1999,
        actor: "Pierce Brosnan",
        director: "Michael Apted",
        girl: "Dr. Christmas Jones (Denise Richards)",
        villain: "Elektra King & Renard",
        gadget: "Lunettes à rayons X & Veste gonflable",
        song: "The World Is Not Enough (Garbage)",
        boxoffice: "361,8 M$",
        synopsis: "Bond protège une héritière d'un empire pétrolier contre un terroriste insensible à la douleur.",
        poster: "assets/images/film19.jpg",
        official: true,
        decade: "90s"
    },
    {
        id: 20,
        title: "Meurs un autre jour",
        year: 2002,
        actor: "Pierce Brosnan",
        director: "Lee Tamahori",
        girl: "Jinx Johnson (Halle Berry)",
        villain: "Gustav Graves / Colonel Moon",
        gadget: "Aston Martin V12 Vanquish invisible",
        song: "Die Another Day (Madonna)",
        boxoffice: "431,9 M$",
        synopsis: "Trahie en Corée du Nord et retenu prisonnier 14 mois, 007 s'évade pour démasquer un traître lié au projet Icarus.",
        poster: "assets/images/film20.jpg",
        official: true,
        decade: "2000s"
    },
    {
        id: 21,
        title: "Casino Royale",
        year: 2006,
        actor: "Daniel Craig",
        director: "Martin Campbell",
        girl: "Vesper Lynd (Eva Green)",
        villain: "Le Chiffre (Mads Mikkelsen)",
        gadget: "Défibrillateur & Kit médical de bord",
        song: "You Know My Name (Chris Cornell)",
        boxoffice: "616,5 M$",
        synopsis: "Reboot magistral. Tout juste promu agent 00, Bond participe à un tournoi de poker à haut risque au Casino Royale.",
        poster: "assets/images/film21.jpg",
        official: true,
        decade: "2000s"
    },
    {
        id: 22,
        title: "Quantum of Solace",
        year: 2008,
        actor: "Daniel Craig",
        director: "Marc Forster",
        girl: "Camille Montes (Olga Kurylenko)",
        villain: "Dominic Greene (Quantum)",
        gadget: "Tableau tactile de renseignement MI6",
        song: "Another Way to Die (Jack White & Alicia Keys)",
        boxoffice: "589,5 M$",
        synopsis: "Recherchant la vérité sur la trahison de Vesper, Bond traque l'organisation Quantum en Bolivie.",
        poster: "assets/images/film22.jpg",
        official: true,
        decade: "2000s"
    },
    {
        id: 23,
        title: "Skyfall",
        year: 2012,
        actor: "Daniel Craig",
        director: "Sam Mendes",
        girl: "Sévérine (Bérénice Marlohe)",
        villain: "Raoul Silva (Javier Bardem)",
        gadget: "Walther PPK/S à empreinte palmaire",
        song: "Skyfall (Adele)",
        boxoffice: "1 108 M$",
        synopsis: "Lorsque le passé de M resurgit, le MI6 est attaqué. Bond affronte le cyber-terroriste Raoul Silva.",
        poster: "assets/images/film23.jpg",
        official: true,
        decade: "2010s+"
    },
    {
        id: 24,
        title: "007 Spectre",
        year: 2015,
        actor: "Daniel Craig",
        director: "Sam Mendes",
        girl: "Dr. Madeleine Swann (Léa Seydoux)",
        villain: "Ernst Stavro Blofeld (Christoph Waltz)",
        gadget: "Montre Omega Seamaster explosive",
        song: "Writing's on the Wall (Sam Smith)",
        boxoffice: "880,7 M$",
        synopsis: "Un message cryptique venu du passé pousse Bond à s'infiltrer au sein de l'organisation criminelle SPECTRE.",
        poster: "assets/images/film24.jpg",
        official: true,
        decade: "2010s+"
    },
    {
        id: 25,
        title: "Mourir peut attendre",
        year: 2021,
        actor: "Daniel Craig",
        director: "Cary Joji Fukunaga",
        girl: "Madeleine Swann & Paloma (Ana de Armas)",
        villain: "Lyutsifer Safin (Rami Malek)",
        gadget: "Prothèse oculaire & Générateur EMP",
        song: "No Time to Die (Billie Eilish)",
        boxoffice: "774,2 M$",
        synopsis: "Bond a quitté le MI6 et profite d'une vie tranquille en Jamaïque jusqu'à ce que son ami Felix Leiter lui demande de l'aide.",
        poster: "assets/images/film25.jpg",
        official: true,
        decade: "2010s+"
    },
    {
        id: 26,
        title: "Casino Royale (Hors-série parodique)",
        year: 1967,
        actor: "David Niven",
        director: "John Huston & autres",
        girl: "Vesper Lynd (Ursula Andress)",
        villain: "Dr. Noah / Le Chiffre (Orson Welles)",
        gadget: "Parodie de gadgets espions",
        song: "The Look of Love (Dusty Springfield)",
        boxoffice: "41,7 M$",
        synopsis: "Adaptation parodique indépendante où Sir James Bond 007 sort de sa retraite pour combattre l'organisation SMERSH.",
        poster: "assets/images/film26.jpg",
        official: false,
        decade: "60s"
    },
    {
        id: 27,
        title: "Jamais plus jamais (Hors-série)",
        year: 1983,
        actor: "Sean Connery",
        director: "Irvin Kershner",
        girl: "Domino Petus (Kim Basinger)",
        villain: "Maximilian Largo (Klaus Maria Brandauer)",
        gadget: "Montre laser & Stylo explosif",
        song: "Never Say Never Again (Lani Hall)",
        boxoffice: "160 M$",
        synopsis: "Sean Connery enfile à nouveau le smoking 12 ans après Diamonds Are Forever dans ce remake officieux d'Opération Tonnerre.",
        poster: "assets/images/film27.jpg",
        official: false,
        decade: "80s"
    }
];

let selectedActorFilter = "all";

function renderMoviesModule() {
    const container = document.getElementById('filmsContainer') || document.getElementById('filmsContainer');
    if (!container) return;
    
    container.innerHTML = `
        <section id="filmographie" class="py-16 px-4 max-w-7xl mx-auto border-b border-bond-border">
            <h2 class="text-3xl font-bold text-white font-cinzel mb-2 text-center">FILMOGRAPHIE OFFICIELLE DE LA SAGA</h2>
            <p class="text-xs text-bond-muted text-center mb-8">Survolez ou cliquez sur une affiche pour ouvrir le dossier classifié secret du MI6.</p>
            
            <div class="flex flex-wrap justify-center gap-2 mb-8" id="actorFilters">
                <button data-actor="all" class="actor-btn px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider border border-bond-gold bg-bond-gold text-black whitespace-nowrap">Tous (1-25)</button>
                <button data-actor="Sean Connery" class="actor-btn px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider border border-bond-border bg-bond-card text-white hover:border-bond-gold whitespace-nowrap">Sean Connery</button>
                <button data-actor="George Lazenby" class="actor-btn px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider border border-bond-border bg-bond-card text-white hover:border-bond-gold whitespace-nowrap">George Lazenby</button>
                <button data-actor="Roger Moore" class="actor-btn px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider border border-bond-border bg-bond-card text-white hover:border-bond-gold whitespace-nowrap">Roger Moore</button>
                <button data-actor="Timothy Dalton" class="actor-btn px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider border border-bond-border bg-bond-card text-white hover:border-bond-gold whitespace-nowrap">Timothy Dalton</button>
                <button data-actor="Pierce Brosnan" class="actor-btn px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider border border-bond-border bg-bond-card text-white hover:border-bond-gold whitespace-nowrap">Pierce Brosnan</button>
                <button data-actor="Daniel Craig" class="actor-btn px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider border border-bond-border bg-bond-card text-white hover:border-bond-gold whitespace-nowrap">Daniel Craig</button>
            </div>
            
            <div class="mb-8 max-w-md mx-auto">
                <input type="text" id="searchInput" placeholder="Rechercher un film, un acteur, un vilain..." class="w-full bg-bond-card border border-bond-border rounded px-4 py-2.5 text-xs text-white focus:border-bond-gold outline-none">
            </div>

            <div id="moviesGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16"></div>

            <!-- Section Hors-Série -->
            <div class="mt-16 pt-12 border-t border-bond-border">
                <h3 class="text-2xl font-bold text-bond-gold font-cinzel mb-2 text-center">FILMS HORS-SÉRIE & PARODIES INDÉPENDANTES</h3>
                <p class="text-xs text-bond-muted text-center mb-8">Productions non-officielles EON Productions</p>
                <div id="unofficialGrid" class="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-6"></div>
            </div>
        </section>

        <!-- Movie Details Modal -->
        <div id="movieModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md hidden items-center justify-center p-4 transition-opacity duration-300">
            <div id="modalContentBox" class="bg-bond-card border border-bond-gold max-w-2xl w-full rounded-lg p-6 relative shadow-2xl transform scale-95 transition-transform duration-300 max-h-[90vh] overflow-y-auto">
                <button onclick="closeMovieModal()" class="absolute top-4 right-4 text-bond-muted hover:text-white text-lg font-bold w-8 h-8 rounded-full bg-bond-charcoal border border-bond-border flex items-center justify-center">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div id="modalBody"></div>
            </div>
        </div>
    `;
    
    renderMoviesGrid();
    renderUnofficialGrid();
    
    document.getElementById('searchInput').addEventListener('input', () => {
        renderMoviesGrid();
        renderUnofficialGrid();
    });

    document.querySelectorAll('#actorFilters .actor-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('#actorFilters .actor-btn').forEach(b => {
                b.className = "actor-btn px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider border border-bond-border bg-bond-card text-white hover:border-bond-gold whitespace-nowrap";
            });
            e.target.className = "actor-btn active px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider border border-bond-gold bg-bond-gold text-black whitespace-nowrap";
            selectedActorFilter = e.target.getAttribute('data-actor');
            renderMoviesGrid();
        });
    });
}

function renderMoviesGrid() {
    const grid = document.getElementById('moviesGrid');
    if (!grid) return;
    const searchVal = document.getElementById('searchInput') ? document.getElementById('searchInput').value.toLowerCase() : "";

    const filtered = filmsData.filter(m => m.official === true).filter(m => {
        const matchesSearch = m.title.toLowerCase().includes(searchVal) || 
                              m.actor.toLowerCase().includes(searchVal) ||
                              m.villain.toLowerCase().includes(searchVal);
        let matchesActor = selectedActorFilter === "all" || m.actor === selectedActorFilter;
        return matchesSearch && matchesActor;
    });

    grid.innerHTML = filtered.map(m => `
        <div onclick="openMovieModal(${m.id})" class="bond-card bg-bond-card border border-bond-border rounded overflow-hidden flex flex-col justify-between gold-border-glow transition-all duration-300 cursor-pointer group">
            <div class="relative h-80 overflow-hidden bg-black flex items-center justify-center p-2">
                <img src="${m.poster}" alt="${m.title}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://placehold.co/400x600/141414/c5a059?text=${encodeURIComponent(m.title)}'">
                <div class="absolute top-3 right-3 bg-black/80 border border-bond-gold text-bond-gold text-[10px] font-bold px-2 py-0.5 rounded tracking-widest font-mono">
                    ${m.year}
                </div>
                <!-- Hover Overlay animation -->
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <span class="text-xs font-bold text-bond-gold uppercase tracking-widest mb-2"><i class="fa-solid fa-folder-open mr-1"></i> Dossier Classifié</span>
                    <span class="text-[11px] text-white underline font-semibold">Cliquer pour consulter</span>
                </div>
            </div>
            <div class="p-4 flex flex-col flex-grow justify-between">
                <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-bond-gold block mb-1">${m.actor}</span>
                    <h3 class="text-base font-bold text-white font-cinzel line-clamp-1">${m.title}</h3>
                    <p class="text-bond-muted text-xs line-clamp-2 mt-2 font-light">${m.synopsis}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderUnofficialGrid() {
    const grid = document.getElementById('unofficialGrid');
    if (!grid) return;
    const searchVal = document.getElementById('searchInput') ? document.getElementById('searchInput').value.toLowerCase() : "";

    const filtered = filmsData.filter(m => m.official === false).filter(m => {
        return m.title.toLowerCase().includes(searchVal) || m.actor.toLowerCase().includes(searchVal);
    });

    grid.innerHTML = filtered.map(m => `
        <div onclick="openMovieModal(${m.id})" class="bond-card bg-bond-card border border-red-900/40 rounded overflow-hidden flex flex-col justify-between hover:border-bond-gold transition-all duration-300 cursor-pointer group">
            <div class="relative h-80 overflow-hidden bg-black flex items-center justify-center p-2">
                <img src="${m.poster}" alt="${m.title}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://placehold.co/400x600/141414/c5a059?text=${encodeURIComponent(m.title)}'">
                <div class="absolute top-3 left-3 bg-red-900/90 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Hors-série</div>
                <div class="absolute top-3 right-3 bg-black/80 border border-bond-gold text-bond-gold text-[10px] font-bold px-2 py-0.5 rounded tracking-widest font-mono">
                    ${m.year}
                </div>
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <span class="text-xs font-bold text-bond-gold uppercase tracking-widest mb-2"><i class="fa-solid fa-folder-open mr-1"></i> Archives Hors-Série</span>
                    <span class="text-[11px] text-white underline font-semibold">Cliquer pour consulter</span>
                </div>
            </div>
            <div class="p-4 flex flex-col flex-grow justify-between">
                <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-bond-gold block mb-1">Acteur : ${m.actor}</span>
                    <h3 class="text-base font-bold text-white font-cinzel line-clamp-1">${m.title}</h3>
                    <p class="text-bond-muted text-xs line-clamp-2 mt-2 font-light">${m.synopsis}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function openMovieModal(id) {
    const film = filmsData.find(m => m.id === id);
    if (!film) return;

    const modal = document.getElementById('movieModal');
    const box = document.getElementById('modalContentBox');
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6">
            <div class="w-full md:w-1/3 flex-shrink-0">
                <img src="${film.poster}" alt="${film.title}" class="w-full h-64 md:h-80 object-contain rounded border border-bond-border bg-black" onerror="this.src='https://placehold.co/400x600/141414/c5a059?text=${encodeURIComponent(film.title)}'">
            </div>
            <div class="w-full md:w-2/3 flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-2 py-0.5 bg-bond-gold/10 border border-bond-gold/40 text-bond-gold text-[10px] font-bold rounded uppercase">${film.official ? 'Film Officiel EON' : 'Hors-Série / Non-officiel'}</span>
                        <span class="text-xs text-bond-muted font-mono">${film.year}</span>
                    </div>
                    <h2 class="text-2xl font-bold text-white font-cinzel mb-3">${film.title}</h2>
                    <div class="grid grid-cols-2 gap-2 text-xs text-bond-silver mb-4 bg-bond-charcoal p-3 rounded border border-bond-border">
                        <div><strong class="text-bond-gold">Agent 007 :</strong> ${film.actor}</div>
                        <div><strong class="text-bond-gold">Réalisateur :</strong> ${film.director}</div>
                        <div><strong class="text-bond-gold">Bond Girl :</strong> ${film.girl}</div>
                        <div><strong class="text-bond-gold">Vilain :</strong> ${film.villain}</div>
                        <div><strong class="text-bond-gold">Gadget Clé :</strong> ${film.gadget}</div>
                        <div><strong class="text-bond-gold">Box-Office :</strong> ${film.boxoffice}</div>
                    </div>
                    <p class="text-xs text-bond-muted leading-relaxed mb-4 font-light"><strong class="text-white">Synopsis du MI6 :</strong> ${film.synopsis}</p>
                </div>
                <div class="pt-3 border-t border-bond-border flex justify-end">
                    <button onclick="closeMovieModal()" class="px-5 py-2 bg-bond-gold text-black font-bold text-xs uppercase rounded hover:bg-white transition-all">Fermer le dossier</button>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
    }, 10);
}

function closeMovieModal() {
    const modal = document.getElementById('movieModal');
    const box = document.getElementById('modalContentBox');
    box.classList.remove('scale-100');
    box.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }, 200);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderMoviesModule);
} else {
    renderMoviesModule();
}