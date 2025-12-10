// Munich Knowledge Quiz - Made with Weißbier 🍺

// ========================================
// QUESTION BANK
// ========================================

const questionBank = [
    // BEER GARDENS & DRINKING
    {
        id: 'hb-capacity',
        category: 'beer',
        difficulty: 'medium',
        question: "What's the actual capacity of the Hofbräuhaus beer hall (the main room)?",
        type: 'multiple',
        options: [
            "Around 1,000 people",
            "Around 1,300 people",
            "Around 2,500 people",
            "Around 3,500 people"
        ],
        correct: 0,
        explanation: "The main Schwemme holds about 1,000 people. But let's be honest, it feels like way more when the tour buses arrive."
    },
    {
        id: 'schaefflertanz',
        category: 'culture',
        difficulty: 'medium',
        question: "True or False: The 'Schäfflertanz' (Cooper's Dance) only happens once every 7 years in Munich.",
        type: 'boolean',
        options: ["True", "False"],
        correct: 1,
        explanation: "False! It's every 7 years... but close enough. Actually, the coopers dance through the streets for several weeks during Fasching in those years. Last one was 2019, next is 2026. Mark your calendar, Zugereister!"
    },
    {
        id: 'gaertnerplatz',
        category: 'neighborhood',
        difficulty: 'easy',
        question: "You're meeting friends 'am Gärtnerplatz' for a Spezi. Which neighborhood are you in?",
        type: 'multiple',
        options: ["Maxvorstadt", "Glockenbach", "Haidhausen", "Schwabing"],
        correct: 1,
        explanation: "Glockenbach! The rainbow-flag-waving, café-sitting, slightly-too-cool-for-you heart of Munich. If you said Maxvorstadt, go back to your Seminar."
    },
    {
        id: 'beer-garden-rules',
        category: 'beer',
        difficulty: 'hard',
        question: "Which of these is NOT a real Munich beer garden rule that locals actually follow?",
        type: 'multiple',
        options: [
            "You can bring your own food (Brotzeit) but must buy drinks there",
            "Never sit at a table with a tablecloth unless you're ordering food",
            "You must say 'Prost' and make eye contact before the first sip",
            "You're not allowed to reserve tables by leaving items on them"
        ],
        correct: 3,
        explanation: "D is fake! Locals absolutely reserve tables by leaving their jacket or Maß-Krug. The other rules? Sacred law. Break them and the beer garden gods will judge you."
    },
    {
        id: 'mir-san-mir',
        category: 'culture',
        difficulty: 'easy',
        question: "What does 'Mir san mir' actually mean, deep in the Bavarian soul?",
        type: 'multiple',
        options: [
            "'We are we' - a statement of Munich pride and identity",
            "'We are tired' - a common complaint about tourists",
            "'We are many' - referring to the city's population",
            "'We are modest' - Bavarian humility"
        ],
        correct: 0,
        explanation: "'We are we' - basically 'we're special and we don't need to explain ourselves to Preißn like you.' FC Bayern's motto. Also every Münchner's life philosophy."
    },
    {
        id: 'eisbach',
        category: 'sights',
        difficulty: 'easy',
        question: "The Eisbachwelle (famous river surfing spot) is in which park?",
        type: 'multiple',
        options: ["Olympiapark", "Englischer Garten", "Westpark", "Hofgarten"],
        correct: 1,
        explanation: "Englischer Garten, obviously! Where else can you surf in January while people drink beer on the banks? This is Munich, baby."
    },
    {
        id: 'viktualienmarkt',
        category: 'food',
        difficulty: 'medium',
        question: "What was originally sold at Viktualienmarkt before it became a food market?",
        type: 'multiple',
        options: [
            "Books and manuscripts",
            "It's always been a food market",
            "Livestock",
            "Beer and wine only"
        ],
        correct: 1,
        explanation: "It's been a food market since 1807! King Max Joseph moved it from Marienplatz because it was getting too crowded. Now it's crowded again, but with tourists taking Instagram photos of radishes."
    },
    {
        id: 'olympiapark-tower',
        category: 'sights',
        difficulty: 'hard',
        question: "How tall is the Olympiaturm (Olympic Tower)?",
        type: 'multiple',
        options: ["190m", "220m", "291m", "310m"],
        correct: 2,
        explanation: "291 meters! Munich's tallest building. You can see the Alps on clear days. You know, those 20 days per year when it's not raining or foggy."
    },
    {
        id: 'weisswurst',
        category: 'food',
        difficulty: 'easy',
        question: "True or False: According to tradition, Weißwurst should not be eaten after 12 noon.",
        type: 'boolean',
        options: ["True", "False"],
        correct: 0,
        explanation: "True! The rule comes from pre-refrigeration days. Now? Locals still judge you if you order it at 3pm. Breakfast sausage is breakfast sausage, Preiß."
    },
    {
        id: 'chinese-tower',
        category: 'sights',
        difficulty: 'medium',
        question: "The Chinesischer Turm (Chinese Tower) in the English Garden is actually a copy of a pagoda from which city?",
        type: 'multiple',
        options: ["Beijing", "Hangzhou", "London", "It's not a copy"],
        correct: 2,
        explanation: "London! It's modeled after the pagoda in Kew Gardens. Because apparently, Munich's English Garden needed to copy England, which copied China. Very European of us."
    },
    {
        id: 'munich-underground',
        category: 'history',
        difficulty: 'hard',
        question: "What's hidden beneath Marienplatz's underground station?",
        type: 'multiple',
        options: [
            "Medieval plague pits",
            "Parts of the old city fortification",
            "A WWII bunker network",
            "All of the above"
        ],
        correct: 3,
        explanation: "All of the above! Munich's underground is like a history lasagna. Every time they dig for the U-Bahn, they find something that delays construction by months. Classic München."
    },
    {
        id: 'leberkassemmel',
        category: 'food',
        difficulty: 'medium',
        question: "A proper Leberkäs-Semmel at the Metzger costs about:",
        type: 'multiple',
        options: ["€2.50", "€3.50", "€4.50", "€5.50"],
        correct: 1,
        explanation: "Around €3.50-4 for a thick-cut beauty with süßem Senf. If you're paying €5.50, you're at Hauptbahnhof and getting robbed. If it's €2.50, that's not real Leberkäs."
    },
    {
        id: 'isar-swimming',
        category: 'life',
        difficulty: 'medium',
        question: "Which Isar spot is NOT an actual local swimming/sunbathing location?",
        type: 'multiple',
        options: [
            "Flaucher",
            "Reichenbachbrücke",
            "Wittelsbacherbrücke",
            "Marienklause"
        ],
        correct: 2,
        explanation: "Wittelsbacherbrücke is not a swimming spot - the current is too strong there! Flaucher and Reichenbachbrücke are summer classics, and Marienklause is perfect for post-swim Radler."
    },
    {
        id: 'starkbierzeit',
        category: 'beer',
        difficulty: 'hard',
        question: "When is Starkbierzeit (Strong Beer Season) in Munich?",
        type: 'multiple',
        options: [
            "January to February",
            "March to April (around Lent)",
            "September (during Oktoberfest)",
            "November to December"
        ],
        correct: 1,
        explanation: "March/April during Lent! Monks brewed strong beer as 'liquid bread' to sustain them during fasting. Now we just use it as an excuse to get hammered before Oktoberfest season. Prost!"
    },
    {
        id: 'mvv-zones',
        category: 'life',
        difficulty: 'easy',
        question: "True or False: The Munich MVV has 6 fare zones (M, 1-5).",
        type: 'boolean',
        options: ["True", "False"],
        correct: 1,
        explanation: "False! It's 16 zones now. But honestly, unless you're going to the airport or Starnberger See, you only need to know zone M. Welcome to the Innenraum, where rent is €1,200 for 30m²."
    },
    {
        id: 'frauenkirche',
        category: 'sights',
        difficulty: 'medium',
        question: "What's forbidden by law to be taller than the Frauenkirche towers in Munich's city center?",
        type: 'multiple',
        options: [
            "All buildings in Munich",
            "Buildings within the Mittlerer Ring",
            "It's not an actual law, just tradition",
            "Only buildings in the Altstadt"
        ],
        correct: 2,
        explanation: "It's not actually a law! Just a building tradition that new construction shouldn't overshadow the Frauenkirche (99m). Though the Olympiaturm said 'hold my Maß' back in 1968."
    },
    {
        id: 'schickeria',
        category: 'neighborhood',
        difficulty: 'medium',
        question: "Where does Munich's 'Schickeria' (posh crowd) traditionally hang out?",
        type: 'multiple',
        options: ["Lehel & Bogenhausen", "Haidhausen", "Sendling", "Neuhausen"],
        correct: 0,
        explanation: "Lehel & Bogenhausen - where the old money lives and the champagne flows. If your apartment has 'Altbau' and 'Stuck' and costs €3 million, you're in Schickeria territory."
    },
    {
        id: 'hofgarten',
        category: 'sights',
        difficulty: 'easy',
        question: "What do locals do at the Hofgarten on summer evenings?",
        type: 'multiple',
        options: [
            "Play chess",
            "Salsa dancing",
            "Grilling",
            "All of the above"
        ],
        correct: 1,
        explanation: "Salsa dancing! Every summer evening, the Hofgarten temple becomes Munich's dance floor. Free, fun, and slightly chaotic. You'll either love it or wonder why they're not in a beer garden like normal people."
    },
    {
        id: 'rathaus-glockenspiel',
        category: 'sights',
        difficulty: 'medium',
        question: "How many times per day does the Rathaus-Glockenspiel chime?",
        type: 'multiple',
        options: ["Once (at noon)", "Twice (11am & noon)", "Three times (11am, noon, 5pm)", "It depends on the season"],
        correct: 3,
        explanation: "Depends! 11am and noon year-round. In summer (March-Oct) it also plays at 5pm. Locals never watch it. That's how you spot the tourist."
    },
    {
        id: 'munich-dialekt',
        category: 'culture',
        difficulty: 'hard',
        question: "What does 'a Breze' refer to in Munich slang (besides the pastry)?",
        type: 'multiple',
        options: [
            "A difficult situation",
            "Someone who's drunk",
            "Nothing - it's only a pastry",
            "A person who's twisted/confused"
        ],
        correct: 2,
        explanation: "It's just a pretzel! But if someone calls you 'breznsoizn' (pretzel-salty), that means you're being annoying. Also, it's BREZE not Bretzel, you Saupreiß."
    }
];

// ========================================
// RECOMMENDATIONS DATABASE
// ========================================

const recommendations = {
    // BEGINNER / TOURIST-LEVEL (missed easy questions)
    beginner: [
        {
            name: "Augustiner-Bräu Biergarten",
            hood: "Westend",
            reason: "Munich's most authentic beer garden. Self-service, wooden tables, and actual locals. This is where you learn the beer garden rules you clearly need to study.",
            vibe: "beer garden bootcamp"
        },
        {
            name: "Viktualienmarkt Biergarten",
            hood: "Altstadt",
            reason: "Start with the classics. Get a Leberkäs-Semmel, sit in the middle of the city, and people-watch like a pro. Bring cash.",
            vibe: "Munich 101"
        },
        {
            name: "Deutsches Museum",
            hood: "Ludwigsvorstadt",
            reason: "World's largest science museum. You live here and haven't been? Shame on you. Spend a whole day, your brain will thank you.",
            vibe: "nerdy goodness"
        },
        {
            name: "Eisbach Wave",
            hood: "Englischer Garten",
            reason: "Watch the surfers, walk along the Eisbach, drink a beer on the grass. This is peak Munich summer energy.",
            vibe: "urban nature bliss"
        },
        {
            name: "Residenz München",
            hood: "Altstadt",
            reason: "Bavaria's former royal palace. Ridiculously opulent. You need the culture points if you're scoring low.",
            vibe: "royal flex"
        }
    ],

    // INTERMEDIATE (decent score, some gaps)
    intermediate: [
        {
            name: "Flaucher",
            hood: "Thalkirchen",
            reason: "Where real Münchners go when the Isar calls. BBQ, swim, float. Leave the tourists at Eisbach.",
            vibe: "local summer secret"
        },
        {
            name: "Schlachthofviertel",
            hood: "Sendling",
            reason: "Former slaughterhouse, now hipster central. Cool bars, Street Food Thursdays, and zero tourists. You're ready for this.",
            vibe: "industrial chic"
        },
        {
            name: "Nymphenburger Schloss & Park",
            hood: "Neuhausen",
            reason: "Massive palace, even more massive park. Rent a bike, explore the pavilions, feel fancy. Actually stunning.",
            vibe: "Baroque excess"
        },
        {
            name: "Westpark",
            hood: "Sendling-Westpark",
            reason: "The chiller alternative to Englischer Garten. Less crowds, Asian gardens, perfect for sunset beers.",
            vibe: "underrated zen"
        },
        {
            name: "Café Glockenspiel",
            hood: "Marienplatz",
            reason: "Rooftop terrace with the best view of Marienplatz. Yeah it's touristy, but the sunset view? *Chef's kiss*",
            vibe: "tourist trap worth it"
        },
        {
            name: "Müller'sches Volksbad",
            hood: "Ludwigsvorstadt",
            reason: "Art Nouveau swimming pool from 1901. Swim in literal history. The architecture alone is worth it.",
            vibe: "Jugendstil wellness"
        }
    ],

    // ADVANCED (high score, deep cuts)
    advanced: [
        {
            name: "Giesinger Bräu Taproom",
            hood: "Giesing",
            reason: "Munich's best craft brewery, no debate. Try the seasonal specials, sit in the Hinterhof, embrace the working-class hood.",
            vibe: "local craft royalty"
        },
        {
            name: "Alte Utting",
            hood: "Sendling",
            reason: "A boat. On a bridge. That's now a bar. Peak Munich absurdist energy. Sunset drinks with the city skyline.",
            vibe: "surreal sunset magic"
        },
        {
            name: "Stuck Villa",
            hood: "Bogenhausen",
            reason: "Art Nouveau mansion/museum. Tucked away, never crowded. Pure Jugendstil elegance. You're clearly cultured enough for this.",
            vibe: "hidden art gem"
        },
        {
            name: "Marienklause",
            hood: "Au",
            reason: "Tiny beer garden under a bridge by the Isar. Get the Steckerlfisch, drink a Radler, watch the river flow. Pure magic.",
            vibe: "secret river hideout"
        },
        {
            name: "Bahnwärter Thiel",
            hood: "Sendling",
            reason: "Hip outdoor bar by the train tracks. Natural wine, cool crowd, industrial vibes. This is where you flex your local status.",
            vibe: "hipster but earned"
        },
        {
            name: "Alter Nordfriedhof",
            hood: "Maxvorstadt",
            reason: "Former cemetery turned park. Gothic monuments, joggers, picnics. Weirdly peaceful. Very Munich.",
            vibe: "beautiful melancholy"
        },
        {
            name: "Museum Fünf Kontinente",
            hood: "Maxvorstadt",
            reason: "Ethnological museum that nobody talks about. Incredible collections, zero crowds. For when you want culture without elbowing tourists.",
            vibe: "underrated world tour"
        },
        {
            name: "Olympiaberg Sunset",
            hood: "Olympiapark",
            reason: "Climb the Olympic Hill at sunset. Alps, city, beer, sunset. Locals only. This is your prize for knowing Munich.",
            vibe: "locals-only panorama"
        }
    ],

    // SPECIFIC TOPIC-BASED
    food: [
        {
            name: "Viktualienmarkt Food Tour",
            hood: "Altstadt",
            reason: "Hit every stall. Käse, Wurst, bread, pickles, fish. Get the education you clearly missed.",
            vibe: "Bavarian food school"
        },
        {
            name: "Weißwurst Frühstück at Schneider Bräuhaus",
            hood: "Tal",
            reason: "Learn to properly 'zuzeln' your Weißwurst before noon. With süßem Senf. This is a rite of passage.",
            vibe: "breakfast ritual"
        }
    ],

    beer: [
        {
            name: "Hofbräuhaus",
            hood: "Altstadt",
            reason: "You got the beer questions wrong? Go to HB. It's touristy but educational. Study the Maß, the bands, the chaos.",
            vibe: "tourist trap graduation"
        },
        {
            name: "All 6 Traditional Breweries Tour",
            hood: "Various",
            reason: "Augustiner, Paulaner, Hacker-Pschorr, Hofbräu, Löwenbräu, Spaten. Visit all six. This is your homework.",
            vibe: "Bavarian beer PhD"
        }
    ],

    culture: [
        {
            name: "Fasching at Viktualienmarkt",
            hood: "Altstadt",
            reason: "Munich's Carnival season. Costumes, dancing, Weißwurst. Experience it or forever be a cultural outsider.",
            vibe: "Bavarian chaos"
        },
        {
            name: "Auer Dult",
            hood: "Au",
            reason: "Traditional flea market fair, three times a year. Antiques, rides, beer. Pure old-Munich vibes.",
            vibe: "vintage Munich"
        }
    ],

    neighborhood: [
        {
            name: "Haidhausen Walk",
            hood: "Haidhausen",
            reason: "The 'Franzosenviertel' streets (Paris, Orleans, etc.), cute cafés, Wiener Platz market. Get to know the hoods!",
            vibe: "village in the city"
        },
        {
            name: "Glockenbach Bar Crawl",
            hood: "Glockenbach",
            reason: "Hit all the bars around Gärtnerplatz. From dive bars to cocktail spots. This is your neighborhood homework.",
            vibe: "rainbow party district"
        }
    ]
};

// ========================================
// GAME STATE
// ========================================

let currentQuiz = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// ========================================
// QUIZ FUNCTIONS
// ========================================

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function selectRandomQuestions() {
    const shuffled = shuffleArray(questionBank);
    return shuffled.slice(0, 6);
}

function renderQuestion(question) {
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');

    questionText.textContent = question.question;
    answersContainer.innerHTML = '';

    const labels = ['A', 'B', 'C', 'D'];

    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.innerHTML = `
            <span class="answer-label">${labels[index]}</span>
            <span class="answer-text">${option}</span>
        `;

        answerDiv.addEventListener('click', () => selectAnswer(index, answerDiv));
        answersContainer.appendChild(answerDiv);
    });
}

function selectAnswer(answerIndex, element) {
    // Remove previous selections
    document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Mark this answer as selected
    element.classList.add('selected');
    userAnswers[currentQuestionIndex] = answerIndex;

    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuiz.length) {
        renderQuestion(currentQuiz[currentQuestionIndex]);
        updateProgress();
        document.getElementById('current-question').textContent = currentQuestionIndex + 1;
        document.getElementById('next-btn').disabled = true;
    } else {
        showResults();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

function calculateScore() {
    score = 0;
    currentQuiz.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    return score;
}

function getVerdict(score) {
    const verdicts = {
        0: {
            title: "Tourist mit MVV-Ticket 🎫",
            text: "Oida... you live here? Really? You know less about Munich than the guy asking where 'Oktoberfest Street' is. Time to actually explore your city, Zugereister!"
        },
        1: {
            title: "Tourist mit MVV-Ticket 🎫",
            text: "One point? ONE? I've seen exchange students score higher. Put down your phone and actually walk around Munich for once."
        },
        2: {
            title: "Wahlmünchner:in auf gutem Weg 🥨",
            text: "You know the basics, but you're still very much 'zugereist'. You can find Marienplatz, but do you know WHY the Glockenspiel plays? Keep learning!"
        },
        3: {
            title: "Wahlmünchner:in auf gutem Weg 🥨",
            text: "Solid! You're getting there. You know where to get a Maß and which U-Bahn to take. But there's still more Munich to discover, Spezi."
        },
        4: {
            title: "Almost a Local Legend 🍺",
            text: "Respekt! You know your beer gardens from your breweries. You can navigate the MVV without Google Maps. A few more years and you'll be untouchable."
        },
        5: {
            title: "Almost a Local Legend 🍺",
            text: "Impressive! You're basically an honorary Münchner. You know the hidden spots, the culture, the vibes. One more point and you'd be running for Stadtrat."
        },
        6: {
            title: "Du bist basically the Bürgermeister 🏆",
            text: "Servus, Your Excellency! You know Munich like the back of your Maßkrug. You probably correct tourists' pronunciation of 'Wiener Platz.' You ARE Munich. Prost!"
        }
    };

    return verdicts[score];
}

function getRecommendations(score, missedCategories) {
    let recs = [];

    // Score-based recommendations
    if (score <= 2) {
        recs.push(...recommendations.beginner.slice(0, 4));
    } else if (score <= 4) {
        recs.push(...recommendations.intermediate.slice(0, 3));
        recs.push(...recommendations.beginner.slice(0, 2));
    } else {
        recs.push(...recommendations.advanced.slice(0, 4));
        recs.push(...recommendations.intermediate.slice(0, 2));
    }

    // Add category-specific recommendations
    if (missedCategories.includes('food')) {
        recs.push(recommendations.food[Math.floor(Math.random() * recommendations.food.length)]);
    }
    if (missedCategories.includes('beer')) {
        recs.push(recommendations.beer[Math.floor(Math.random() * recommendations.beer.length)]);
    }
    if (missedCategories.includes('culture')) {
        recs.push(recommendations.culture[Math.floor(Math.random() * recommendations.culture.length)]);
    }
    if (missedCategories.includes('neighborhood')) {
        recs.push(recommendations.neighborhood[Math.floor(Math.random() * recommendations.neighborhood.length)]);
    }

    // Shuffle and limit to 6-8 recommendations
    const shuffled = shuffleArray(recs);
    return shuffled.slice(0, Math.min(8, shuffled.length));
}

function showResults() {
    const finalScore = calculateScore();
    const verdict = getVerdict(finalScore);

    // Find missed categories
    const missedCategories = [];
    currentQuiz.forEach((question, index) => {
        if (userAnswers[index] !== question.correct) {
            if (!missedCategories.includes(question.category)) {
                missedCategories.push(question.category);
            }
        }
    });

    // Hide question screen, show results screen
    document.getElementById('question-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');

    // Display score and verdict
    document.getElementById('verdict-title').textContent = verdict.title;
    document.getElementById('score-number').textContent = finalScore;
    document.getElementById('verdict-text').textContent = verdict.text;

    // Show answer review
    const reviewContainer = document.getElementById('answers-review');
    reviewContainer.innerHTML = '<h3>How You Did:</h3>';

    currentQuiz.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correct;
        const userAnswerText = question.options[userAnswers[index]];
        const correctAnswerText = question.options[question.correct];

        const reviewDiv = document.createElement('div');
        reviewDiv.className = `answer-review ${isCorrect ? 'correct' : 'incorrect'}`;
        reviewDiv.innerHTML = `
            <div class="review-question">
                <strong>Q${index + 1}:</strong> ${question.question}
            </div>
            <div class="review-answer">
                ${isCorrect ? '✅' : '❌'} Your answer: <strong>${userAnswerText}</strong>
                ${!isCorrect ? `<br>Correct: <strong>${correctAnswerText}</strong>` : ''}
            </div>
            <div class="review-explanation">${question.explanation}</div>
        `;
        reviewContainer.appendChild(reviewDiv);
    });

    // Show recommendations
    const recIntro = document.querySelector('.rec-intro');
    if (finalScore <= 2) {
        recIntro.textContent = "You need the basics, friend. Start here:";
    } else if (finalScore <= 4) {
        recIntro.textContent = "You're on the right track. Level up with these:";
    } else {
        recIntro.textContent = "You're clearly advanced. Time for the deep cuts:";
    }

    const recsToShow = getRecommendations(finalScore, missedCategories);
    const recsList = document.getElementById('recommendations-list');
    recsList.innerHTML = '';

    recsToShow.forEach(rec => {
        const recDiv = document.createElement('div');
        recDiv.className = 'rec-card';
        recDiv.innerHTML = `
            <h4>${rec.name}</h4>
            <div class="rec-hood">${rec.hood}</div>
            <p>${rec.reason}</p>
            <span class="rec-vibe">${rec.vibe}</span>
        `;
        recsList.appendChild(recDiv);
    });
}

function startQuiz() {
    // Reset game state
    currentQuiz = selectRandomQuestions();
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;

    // Hide intro, show question screen
    document.getElementById('intro-screen').classList.remove('active');
    document.getElementById('question-screen').classList.add('active');

    // Render first question
    renderQuestion(currentQuiz[0]);
    updateProgress();
    document.getElementById('current-question').textContent = 1;
}

function restartQuiz() {
    // Hide results, show intro
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('intro-screen').classList.add('active');
}

// ========================================
// EVENT LISTENERS
// ========================================

document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const questionScreen = document.getElementById('question-screen');
    if (questionScreen.classList.contains('active')) {
        if (e.key === 'Enter' && !document.getElementById('next-btn').disabled) {
            nextQuestion();
        }
        // Optional: A/B/C/D keyboard shortcuts
        const keyMap = {'a': 0, 'b': 1, 'c': 2, 'd': 3};
        if (keyMap.hasOwnProperty(e.key.toLowerCase())) {
            const answerOptions = document.querySelectorAll('.answer-option');
            const index = keyMap[e.key.toLowerCase()];
            if (answerOptions[index]) {
                answerOptions[index].click();
            }
        }
    }
});
