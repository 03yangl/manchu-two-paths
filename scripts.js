let currentScene = 0;
let playerType = '';
let gameYear = 1908;
let playerAge = 2;

const scenes = {
    puyi: [
        {
            text: "1908: At age 2, you are taken from your family to become Emperor of China. The Forbidden City will be your entire world.",
            image: "/images/forbidden city.jpg",
            choices: [
                {
                    text: "Cling to your wet nurse Wang Jing'er for comfort",
                    consequence: "You develop a close bond with your nurse, finding warmth in an otherwise formal world. Court officials disapprove this.",
                    next: 1
                },
                {
                    text: "Accept the imperial routines and rituals",
                    consequence: "You quickly adapt to palace life, becoming serious beyond your years. Your emotional development suffers, but you excel at court etiquette.",
                    next: 1
                }
            ]
        },
        {
            text: "1912: The Revolution succeeds. Though you've abdicated, you remain in the Forbidden City as a nominal emperor.",
            image: "/images/childpuyi.jpeg",
            choices: [
                {
                    text: "Find ways to exert power over your servants",
                    consequence: "You develop a harsh temperament, taking out your frustrations on household staff. Your actions provide an illusion of power, but you don't have more power than that and you are uneducated.",
                    next: 2
                },
                {
                    text: "Focus on your studies of Chinese classics",
                    consequence: "You find solace in learning, though your isolation from the outside world deepens. Your tutor Chen Baochen becomes a father figure.",
                    next: 2
                }
            ]
        },
        {
            text: "1919: Reginald Johnston becomes your English tutor, offering glimpses of the outside world.",
            image: "/images/reginald.jpg",
            choices: [
                {
                    text: "Embrace Western learning enthusiastically",
                    consequence: "You develop a deep interest in English literature and Western ideas. Johnston becomes a trusted advisor, though this creates tension with conservative officials.",
                    next: 3
                },
                {
                    text: "Study cautiously while maintaining Chinese traditions",
                    consequence: "You balance new knowledge with traditional learning, pleasing neither modernizers nor conservatives completely. Johnston respects your careful approach.",
                    next: 3
                }
            ]
        },
        {
            text: "1922: Your marriage to Wanrong is arranged. She is beautiful and educated.",
            image: "/images/wanrong.jpeg",
            choices: [
                {
                    text: "Treat her as an equal partner",
                    consequence: "You and Wanrong develop a genuine connection, sharing interests in literature and modern ideas. Your progressive attitude shocks traditionalists.",
                    next: 4
                },
                {
                    text: "Maintain traditional imperial distance",
                    consequence: "Your formal relationship leaves Wanrong lonely and isolated. She seeks comfort in opium, beginning a tragic addiction.",
                    next: 4
                }
            ]
        },
        {
            text: "1924: Feng Yuxiang's forces expel you from the Forbidden City. You must leave your ancestral home.",
            image: "/images/tianjin.png",
            choices: [
                {
                    text: "Move to the Japanese concession in Tianjin",
                    consequence: "You establish a luxurious Western lifestyle in Tianjin, surrounded by international influences and modernity.",
                    next: 5
                },
                {
                    text: "Seek refuge with Chinese warlords",
                    consequence: "Unfortunately you are manipulated by the Japanese people, and this is not really possible at the time.",
                    next: 5
                }
            ]
        },
        {
            text: "1931: Japanese officials offer to make you Emperor of Manchukuo.",
            image: "/images/manchukuo.jpg",
            choices: [
                {
                    text: "Accept with hopes of real authority",
                    consequence: "You become Emperor of Manchukuo but quickly realize you're merely a puppet. Your attempts at genuine rule are thwarted.",
                    next: 6
                },
                {
                    text: "Accept while secretly documenting Japanese actions",
                    consequence: "You maintain detailed records of Japanese atrocities, though you feel powerless to stop them.",
                    next: 6
                }
            ]
        },
        {
            text: "1945: Soviet forces have captured you. You face interrogation about your role in Manchukuo.",
            image: "/images/soviet.jpg",
            choices: [
                {
                    text: "Cooperate fully and admit your mistakes",
                    consequence: "Your honesty earns better treatment. The Soviets begin to see you as a potential asset for the Chinese communists.",
                    next: 7
                },
                {
                    text: "Maintain that you were forced by the Japanese",
                    consequence: "Your defensive stance leads to harsher treatment, though you maintain your sense of \"dignity,\" or have you really maintained it?",
                    next: 7
                }
            ]
        },
        {
            text: "1950: The Chinese Communist authorities begin your re-education in Fushun Prison.",
            image: "/images/fushun.jpg",
            choices: [
                {
                    text: "Embrace re-education with genuine interest",
                    consequence: "You begin a profound personal transformation, discovering new purpose in learning about ordinary life.",
                    next: 8
                },
                {
                    text: "Go through the motions while preserving inner identity",
                    consequence: "You outwardly comply while maintaining private memories of your imperial past. Guards sense your reservation.",
                    next: 8
                }
            ]
        },
        {
            text: "1959: Released from prison, you begin work as a gardener in the Beijing Botanical Gardens.",
            image: "/images/gardener.jpg",
            choices: [
                {
                    text: "Find joy in this simple life",
                    consequence: "You develop genuine passion for gardening and find peace in your new role. Your colleagues come to respect you.",
                    next: 9
                },
                {
                    text: "Treat it as merely a duty",
                    consequence: "You perform your work adequately but remain somewhat distant from colleagues, who sense your imperial background.",
                    next: 9
                }
            ]
        },
        {
            text: "1962: You're asked to write your autobiography, 'From Emperor to Citizen.'",
            image: "/images/autobiography.jpg",
            choices: [
                {
                    text: "Write with complete honesty about your transformation",
                    consequence: "Your sincere account becomes a powerful testimony of personal change, though some question its authenticity.",
                    next: 10
                },
                {
                    text: "Write carefully, balancing truth with political necessity",
                    consequence: "Your measured account satisfies authorities while preserving some dignity, though it feels incomplete to you, people question your honesty.",
                    next: 10
                }
            ]
        },
        {
            text: "1964: You meet Li Shuxian, a hospital nurse.",
            image: "/images/newnurse.jpg",
            choices: [
                {
                    text: "Court her openly, despite your past",
                    consequence: "You find genuine love and companionship. Li Shuxian helps you embrace your new life fully.",
                    next: 11
                },
                {
                    text: "Pursue a cautious relationship",
                    consequence: "Your relationship develops slowly but steadily, providing quiet companionship in your final years.",
                    next: 11
                }
            ]
        },
        {
            text: "1967: The Cultural Revolution begins. Red Guards question your reformation.",
            image: "/images/redguards.jpg",
            choices: [
                {
                    text: "Participate in self-criticism sessions willingly",
                    consequence: "Your visible cooperation helps you weather the political storm, though the sessions are emotionally draining.",
                    final: true
                },
                {
                    text: "Maintain a quiet dignity while complying",
                    consequence: "You endure the period with inner strength, finding solace in your garden work and relationship with Li Shuxian.",
                    final: true
                }
            ]
        }
    ],
    manchu: [
        {
            text: "1911: The Banner system has collapsed. Your family receives notice that all stipends will end immediately.",
            image: "/images/banner.jpg",
            choices: [
                {
                    text: "Sell things from home to survive",
                    consequence: "You maintain a basic living but lose precious connections to your heritage.",
                    next: 1
                },
                {
                    text: "Try to maintain status by borrowing money",
                    consequence: "The debts begin to mount dangerously, threatening your family's future.",
                    next: 1
                }
            ]
        },
        {
            text: "1912: Anti-Manchu sentiment turns violent. Officials suggest changing your family name. [CRITICAL CHOICE]",
            image: "/images/fengcheng1.jpg",
            critical: true,
            choices: [
                {
                    text: "Change surname to a Han name Yang(杨)",
                    consequence: "Your family survives but loses its ancestral name. Your father weeps as he burns the family genealogy.",
                    next: 2
                },
                {
                    text: "Refuse to abandon your Manchu name",
                    consequence: "GAME OVER: Your family becomes a target. None survive the night of violence.",
                    gameOver: true
                }
            ]
        },
        {
            text: "1915: Your father turns to gambling, hoping to restore the family's fortunes.",
            image: "/images/fengcheng2.jpg",
            choices: [
                {
                    text: "Try to stop his gambling",
                    consequence: "He resents your interference but the debts grow more slowly. Family tensions rise.",
                    next: 3
                },
                {
                    text: "Let him continue gambling",
                    consequence: "The debts spiral out of control. Dangerous people begin visiting your home.",
                    next: 3
                }
            ]
        },
        {
            text: "1920: Violent creditors demand immediate payment. [CRITICAL CHOICE]",
            image: "/images/fengcheng3.jpg",
            critical: true,
            choices: [
                {
                    text: "Flee from Fengcheng(凤城) overnight to Yanbian(延边)",
                    consequence: "You escape with just a few possessions, beginning a new life in another region with your entire family.",
                    next: 4
                },
                {
                    text: "Try to negotiate with creditors",
                    consequence: "GAME OVER: The creditors make an example of your family. The community finds your bodies the next morning.",
                    gameOver: true
                }
            ]
        },
        {
            text: "1925: In Yanbian, your family is the only Manchu household. Nobody speaks your language.",
            image: "/images/fengcheng4.jpg",
            choices: [
                {
                    text: "Stop using Manchu language entirely",
                    consequence: "Communication with neighbors improves, but your children quickly forget their native tongue.",
                    next: 5
                },
                {
                    text: "Try maintaining Manchu at home",
                    consequence: "Everyone barely remembers how to speak Manchu other than basic words such as mom and dad.",
                    next: 5
                }
            ]
        },
        {
            text: "1935: Japanese forces enter your village. They demand cooperation. [CRITICAL CHOICE]",
            image: "/images/japaninmanchu.jpg",
            critical: true,
            choices: [
                {
                    text: "Hide in the forest",
                    consequence: "You survive but witness your parents' death as the Japanese burn your home.",
                    next: 6
                },
                {
                    text: "Try to cooperate with Japanese",
                    consequence: "GAME OVER: The Japanese make false promises. Your family dies in the flames anyway.",
                    gameOver: true
                }
            ]
        },
        {
            text: "1938: You meet another Manchu girl.",
            image: "/images/greatgrandparents.jpg",
            choices: [
                {
                    text: "Marry and try to preserve traditions together",
                    consequence: "You find comfort in shared heritage, but you need to survive first.",
                    next: 7
                },
                {
                    text: "Focus on building a new life",
                    consequence: "You marry but prioritize survival over cultural preservation.",
                    next: 7
                }
            ]
        },
        {
            text: "1949: The People's Republic is established. Local officials encourage integration.",
            image: "/images/fengcheng5.jpg",
            choices: [
                {
                    text: "Fully embrace the new society",
                    consequence: "Your family gains acceptance but loses the last traces of Manchu identity.",
                    next: 8
                },
                {
                    text: "Try to maintain some traditions",
                    consequence: "Most traditions fade anyway since survival is the most important thing.",
                    next: 8
                }
            ]
        },
        {
            text: "1960: Your children have grown up in Yanbian. They want to marry local Han partners.",
            image: "/images/grandpama.jpg",
            choices: [
                {
                    text: "Support their choices",
                    consequence: "Your grandchildren will grow up knowing more about Han customs than Manchu heritage.",
                    next: 9
                },
                {
                    text: "Express sadness about tradition",
                    consequence: "Your children marry anyway. The generational divide grows wider.",
                    next: 9
                }
            ]
        },
        {
            text: "1970: Your grandchildren are growing up in Yanbian, learning more Korean culture than Manchu culture.",
            image: "/images/dad.jpg",
            choices: [
                {
                    text: "Accept that Manchu heritage is lost",
                    consequence: "Your family story becomes just a fading memory as your grandchildren embrace local traditions.",
                    final: true
                },
                {
                    text: "Write down family history",
                    consequence: "Your memoirs are stored away, rarely read as the family fully integrates into Yanbian's community.",
                    final: true
                }
            ]
        }
    ]
};

// This will store player's previous choices to reference in later scenes
let choiceHistory = [];

// Core game mechanics
function startGame(character) {
    playerType = character;
    document.getElementById('character-select').classList.add('hidden');
    document.getElementById('game-content').classList.remove('hidden');
    document.getElementById('character-type').textContent = character === 'puyi' ? 'Emperor Puyi' : 'Manchu Family';
    
    // Set initial year and age based on character
    gameYear = character === 'puyi' ? 1908 : 1911;
    playerAge = character === 'puyi' ? 2 : 20;
    
    updateScene(0);
}

function updateScene(sceneId) {
    currentScene = sceneId;
    const scene = scenes[playerType][sceneId];
    
    // Update timeline and story
    document.getElementById('timeline-marker').textContent = scene.text.split(':')[0];
    document.getElementById('story-text').textContent = scene.text.split(':')[1] || scene.text;
    document.getElementById('scene-image').src = scene.image;
    
    // Clear previous consequence
    document.getElementById('consequence').style.display = 'none';
    
    // Update choices
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    scene.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        
        // Add context if available
        if (choice.context) {
            const context = document.createElement('div');
            context.className = 'reaction';
            context.textContent = choice.context;
            button.appendChild(context);
        }
        
        button.onclick = () => makeChoice(choice, index);
        choicesDiv.appendChild(button);
    });

    // Reference previous choices if relevant
    if (scene.previousChoiceEffect) {
        applyPreviousChoiceEffect(scene);
    }
}

function makeChoice(choice, choiceIndex) {
    // Store this choice for future reference
    choiceHistory.push({
        scene: currentScene,
        choice: choiceIndex,
        year: gameYear
    });

    // Show consequence
    const consequenceDiv = document.getElementById('consequence');
    consequenceDiv.textContent = choice.consequence;
    consequenceDiv.style.display = 'block';

    // Progress time
    const timeProgress = choice.timeJump || 3; // Default 3 years if not specified
    gameYear += timeProgress;
    playerAge += timeProgress;
    
    // Update status bar
    document.getElementById('year').textContent = gameYear;
    document.getElementById('age').textContent = playerAge;

    // Add continue button after showing consequence
    setTimeout(() => {
        const continueButton = document.createElement('button');
        continueButton.className = 'choice-btn';
        continueButton.textContent = 'Continue';
        continueButton.onclick = () => {
            if (choice.final) {
                endGame();
            } else if (scenes[playerType][choice.next]) {
                updateScene(choice.next);
            } else {
                endGame();
            }
        };
        consequenceDiv.appendChild(continueButton);
    }, 1000);
}

function applyPreviousChoiceEffect(scene) {
    const relevantChoice = choiceHistory.find(choice => 
        choice.scene === scene.previousChoiceEffect.fromScene
    );
    
    if (relevantChoice) {
        const effectText = scene.previousChoiceEffect.effects[relevantChoice.choice];
        if (effectText) {
            const effectDiv = document.createElement('div');
            effectDiv.className = 'reaction';
            effectDiv.textContent = effectText;
            document.getElementById('story-text').appendChild(effectDiv);
        }
    }
}

function endGame() {
    // Generate ending based on choice history
    const summary = generateEnding();
    
    document.getElementById('story-text').textContent = summary;
    document.getElementById('consequence').style.display = 'none';
    document.getElementById('choices').innerHTML = 
        '<button class="choice-btn" onclick="location.reload()">Play Again</button>';
}

function generateEnding() {
    if (playerType === 'puyi') {
        return `Your journey from Emperor to citizen has completed. Through tremendous changes, you have experienced China's transformation firsthand. Your story will be remembered as a unique chapter in Chinese history.`;
    } else {
        return `Your family's journey through decades of change has come to an end. Like many Manchu families, you found ways to adapt while keeping memories of your heritage alive. Your descendants will carry this legacy forward in their own way.`;
    }
}

// Scene advancement calculations
function calculateNextScene(currentScene, choice) {
    // Each scene has a predetermined next scene based on the narrative flow
    return choice.next;
}

// Reference system for previous choices
function getPreviousChoice(sceneId) {
    return choiceHistory.find(choice => choice.scene === sceneId);
}

// Time progression system
function progressTime(years) {
    gameYear += years;
    playerAge += years;
    document.getElementById('year').textContent = gameYear;
    document.getElementById('age').textContent = playerAge;
}