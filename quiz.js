const quizQuestions = [
    { q: "Quelle est l'arme de poing emblématique du matricule 007 ?", options: ["Beretta 92", "Walther PPK", "Glock 17"], answer: 1 },
    { q: "Dans quel film l'Aston Martin DB5 apparaît-elle pour la première fois ?", options: ["Dr. No", "Goldfinger", "Skyfall"], answer: 1 },
    { q: "Quel acteur a incarné James Bond dans 'Au service secret de Sa Majesté' ?", options: ["Sean Connery", "Roger Moore", "George Lazenby"], answer: 2 },
    { q: "Comment James Bond aime-t-il son Vodka Martini ?", options: ["Mélangé à la cuillère", "Secoué, pas agité", "Sans glaçons"], answer: 1 }
];

let quizIdx = 0;
let score = 0;

function renderQuizModule() {
    const root = document.getElementById('quizContainerRoot');
    if (!root) return;

    if (quizIdx >= quizQuestions.length) {
        root.innerHTML = `
            <section id="quiz" class="py-16 px-4 max-w-3xl mx-auto text-center">
                <div class="bg-bond-card border border-bond-border p-8 rounded gold-border-glow">
                    <h3 class="text-2xl font-bold text-white font-cinzel mb-3">RÉSULTAT DU EVALUATION DU MI6</h3>
                    <p class="text-bond-gold font-bold text-xl mb-4">Score : ${score} / ${quizQuestions.length}</p>
                    <p class="text-xs text-bond-muted mb-6">${score === quizQuestions.length ? 'Félicitations Agent. Accréditation Double-0 accordée.' : 'Entraînement supplémentaire requis au QG.'}</p>
                    <button onclick="resetQuiz()" class="px-6 py-2.5 bg-bond-gold text-black font-bold text-xs uppercase rounded hover:bg-white transition-all">Recommencer le Test</button>
                </div>
            </section>
        `;
        return;
    }

    const q = quizQuestions[quizIdx];
    root.innerHTML = `
        <section id="quiz" class="py-16 px-4 max-w-3xl mx-auto">
            <div class="bg-bond-card border border-bond-border rounded p-6 sm:p-8 gold-border-glow">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-xs text-bond-gold uppercase font-bold tracking-widest">Test d'accréditation MI6</span>
                    <span class="text-xs text-bond-muted font-mono">Question ${quizIdx + 1}/${quizQuestions.length}</span>
                </div>
                <h3 class="text-lg font-bold text-white font-cinzel mb-6">${q.q}</h3>
                <div class="space-y-3">
                    ${q.options.map((opt, i) => `
                        <button onclick="answerQuiz(${i})" class="w-full text-left p-3.5 bg-bond-charcoal border border-bond-border hover:border-bond-gold rounded text-xs text-white font-semibold transition-all">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function answerQuiz(idx) {
    if (idx === quizQuestions[quizIdx].answer) { score++; }
    quizIdx++;
    renderQuizModule();
}

function resetQuiz() {
    quizIdx = 0;
    score = 0;
    renderQuizModule();
}

document.addEventListener('DOMContentLoaded', renderQuizModule);