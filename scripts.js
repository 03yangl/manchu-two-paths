let currentScene = 0;
let playerType = '';
let gameYear = 1908;
let playerAge = 2;

const scenes = {
    puyi: [
        {
            text: "1908: At age 2, you are taken from your family to become Emperor of China. The Forbidden City will be your entire world.",
            image: "/forbidden city.jpg",
            choices: [
                {
                    text: "Cling to your wet nurse Wang Jing'er for comfort",
                    consequence: "You develop a close bond with your nurse, finding warmth in an otherwise formal world. Court officials disapprove but allow it due to your young age.",
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
            image: "/childpuyi.jpeg",
            choices: [
                {
                    text: "Find ways to exert power over your servants",
                    consequence: "You develop a harsh temperament, taking out your frustrations on household staff. Your actions provide an illusion of power.",
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
            image: "/api/placeholder/800/400",
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
            image: "/api/placeholder/800/400",
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
            image: "/api/placeholder/800/400",
            choices: [
                {
                    text: "Move to the Japanese concession in Tianjin",
                    consequence: "You establish a luxurious Western lifestyle in Tianjin, surrounded by international influences and modernity.",
                    next: 5
                },
                {
                    text: "Seek refuge with Chinese warlords",
                    consequence: "You maintain connections with Chinese power brokers, though your lifestyle becomes more modest.",
                    next: 5
                }
            ]
        },
        {
            text: "1931: Japanese officials offer to make you Emperor of Manchukuo.",
            image: "/api/placeholder/800/400",
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
            image: "/api/placeholder/800/400",
            choices: [
                {
                    text: "Cooperate fully and admit your mistakes",
                    consequence: "Your honesty earns better treatment. The Soviets begin to see you as a potential asset for the Chinese communists.",
                    next: 7
                },
                {
                    text: "Maintain that you were forced by the Japanese",
                    consequence: "Your defensive stance leads to harsher treatment, though you maintain your sense of dignity.",
                    next: 7
                }
            ]
        },
        {
            text: "1950: The Chinese Communist authorities begin your re-education in Fushun Prison.",
            image: "/api/placeholder/800/400",
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
            image: "/api/placeholder/800/400",
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
            image: "/api/placeholder/800/400",
            choices: [
                {
                    text: "Write with complete honesty about your transformation",
                    consequence: "Your sincere account becomes a powerful testimony of personal change, though some question its authenticity.",
                    next: 10
                },
                {
                    text: "Write carefully, balancing truth with political necessity",
                    consequence: "Your measured account satisfies authorities while preserving some dignity, though it feels incomplete to you.",
                    next: 10
                }
            ]
        },
        {
            text: "1964: You meet Li Shuxian, a hospital nurse.",
            image: "/api/placeholder/800/400",
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
            image: "/api/placeholder/800/400",
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
            text: "1911: Your once-privileged Banner family faces an uncertain future as revolution spreads. The government stipend may soon end.",
            image: "/api/placeholder/800/400",
            choices: [
                {
                    text: "Invest family savings in modern education",
                    consequence: "Your children gain new opportunities but begin losing touch with their Manchu heritage. They learn alongside Han students.",
                    next: 1
                },
                {
                    text: "Maintain traditional Manchu lifestyle",
                    consequence: "You preserve customs but face increasing economic hardship as Banner privileges disappear.",
                    next: 2
                }
            ]
        },
        {
            text: "1915: Your father starts gambling at local establishments, hoping to maintain the family's standard of living.",
            image: "/api/placeholder/800/400",
            choices: [
                {
                    text: "Sell family heirlooms secretly",
                    consequence: "You lose precious artifacts but manage to pay off initial debts. Your mother cries seeing empty display cases.",
                    next: 3
                },
                {
                    text: "Move to a smaller house in a poorer district",
                    consequence: "Your status falls but you keep your heritage items. The children face discrimination in the new neighborhood.",
                    next: 4
                }
            ]
        },
        {
            text: "1920: Dangerous creditors demand payment. Your father has disappeared. [CRITICAL CHOICE]",
            image: "/api/placeholder/800/400",
            critical: true,
            choices: [
                {
                    text: "Flee to Harbin overnight",
                    consequence: "You abandon your home but save your family's lives. A harsh new beginning awaits in the northern city.",
                    next: 5
                },
                {
                    text: "Stay and try to negotiate",
                    consequence: "GAME OVER: The creditors show no mercy. Your family's tragedy becomes a cautionary tale.",
                    gameOver: true
                }
            ]
        },
        {
            text: "1923: In Harbin, your children attend a mixed school. Your youngest hasn't spoken Manchu in months.",
            image: "/api/placeholder/800/400",
            choices: [
                {
                    text: "Enforce Manchu language at home",
                    consequence: "The children resent the restrictions but maintain basic language skills. Family tensions rise.",
                    next: 6
                },
                {
                    text: "Allow natural assimilation",
                    consequence: "Family communication becomes easier but your mother mourns the loss of heritage.",
                    next: 7
                }
            ]
        },
        {
            text: "1926: A marriage proposal arrives for your daughter - from a wealthy Han merchant's son.",
            image: "/api/placeholder/800/400",
            choices: [
                {
                    text: "Accept the inter-ethnic marriage",
                    consequence: "Your daughter gains financial security but tradition-minded relatives cut ties.",
                    next: 8
                },
                {
                    text: "Insist on finding a Manchu suitor",
                    consequence: "You maintain cultural purity but limit your daughter's prospects in the changing society.",
                    next: 9
                }
            ]
        },
        {
            text: "1931: Japanese forces establish Manchukuo. Officials offer benefits to cooperative Manchu families. [CRITICAL CHOICE]",
            image: "/api/placeholder/800/400",
            critical: true,
            choices: [
                {
                    text: "Quietly decline and move south",
                    consequence: "You face poverty again but maintain independence. The family relocates to Tianjin.",
                    next: 10
                },
                {
                    text: "Accept Japanese patronage",
                    consequence: "GAME OVER: Your family gains wealth but faces execution as collaborators in 1945.",
                    gameOver: true
                }
            ]
        },
        {
            text: "1935: In Tianjin, your children want to cut their queues and adopt modern hairstyles.",
            image: "/api/placeholder/800/400",
            choices: [
                {
                    text: "Allow modernization",
                    consequence: "Your family blends in better but loses another visible link to Manchu identity.",
                    next: 11
                },
                {
                    text: "Keep traditional appearance",
                    consequence: "You face increased harassment but maintain cultural pride. Your sons resent standing out.",
                    next: 11
                }
            ]
        },
        {
            text: "1938: War brings refugees to Tianjin. Your oldest son wants to join the resistance against Japan.",
            image: "/api/placeholder/800/400",
            choices: [
                {
                    text: "Support his patriotic choice",
                    consequence: "He fights for China, bridging the Manchu-Han divide but risking his life.",
                    next: 12
                },
                {
                    text: "Convince him to focus on family",
                    consequence: "He stays safe but carries guilt. The family faces suspicion from patriotic neighbors.",
                    next: 12
                }
            ]
        },
        {
            text: "1940: Your neighborhood faces bombing. An old Han family offers shelter in their compound. [CRITICAL CHOICE]",
            image: "/api/placeholder/800/400",
            critical: true,
            choices: [
                {
                    text: "Accept help and integrate",
                    consequence: "You survive the war years, forming lasting bonds across ethnic lines.",
                    next: 13
                },
                {
                    text: "Maintain proud isolation",
                    consequence: "GAME OVER: The next bombing raid finds your family without shelter.",
                    gameOver: true
                }
            ]
        },
        {
            text: "1945: After Japan's defeat, communist forces gain strength. Your youngest wants to join the party.",
            image: "/api/placeholder/800/400",
            choices: [
                {
                    text: "Support political adaptation",
                    consequence: "Your son's party membership later protects the family but requires rejecting the past.",
                    next: 14
                },
                {
                    text: "Discourage political involvement",
                    consequence: "You maintain independence but face challenges as 'class enemies' in the new order.",
                    next: 14
                }
            ]
        },
        {
            text: "1947: Land reform begins. Officials question your family's Banner background. [CRITICAL CHOICE]",
            image: "/api/placeholder/800/400",
            critical: true,
            choices: [
                {
                    text: "Fully embrace peasant status",
                    consequence: "You survive by completely renouncing your past, working as manual laborers.",
                    next: 15
                },
                {
                    text: "Defend your heritage",
                    consequence: "GAME OVER: The family is labeled as reactionary and faces persecution.",
                    gameOver: true
                }
            ]
        },
        {
            text: "1949: The People's Republic is established. Your grandchildren speak only Mandarin.",
            image: "/api/placeholder/800/400",
            choices: [
                {
                    text: "Record family history privately",
                    consequence: "You preserve knowledge for the future while publicly conforming. The manuscripts are hidden away.",
                    final: true
                },
                {
                    text: "Embrace the new era completely",
                    consequence: "Your family fully integrates into modern China, but centuries of cultural heritage fade away.",
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