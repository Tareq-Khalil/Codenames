const rounds = [
            {
                title: "Crime & Legal Terms ",
                words: [
                    { word: "jaywalking", def: "crossing the street illegally" },
                    { word: "manslaughter", def: "unintentional killing" },
                    { word: "vandalism", def: "damaging public property on purpose" },
                    { word: "slander", def: "saying untrue things to damage reputation" },
                    { word: "libel", def: "writing untrue things to damage reputation" },
                    { word: "loiter", def: "staying somewhere without purpose" },
                    { word: "trespass", def: "going on land without permission" },
                    { word: "probation", def: "supervised period instead of prison" },
                    { word: "parole", def: "early release from prison with conditions" },
                    { word: "capital punishment", def: "legal execution for serious crimes" },
                    { word: "community service", def: "unpaid work as punishment" },
                    { word: "legal aid", def: "state money for lawyers" },
                    { word: "prosecutor", def: "lawyer who proves someone guilty" },
                    { word: "solicitor", def: "lawyer giving legal advice" },
                    { word: "barrister", def: "lawyer in higher courts" },
                    { word: "juror", def: "member of the jury" },
                    { word: "inmate", def: "prisoner" },
                    { word: "vagrant", def: "homeless person who begs" },
                    { word: "delinquent", def: "young person committing minor crimes" },
                    { word: "culprit", def: "person who did something wrong" },
                    { word: "offence", def: "act breaking the law" },
                    { word: "juvenile delinquency", def: "criminal behavior by young people" },
                    { word: "witness", def: "person testifying about a crime in court" },
                    { word: "constable", def: "low-ranking police officer" },
                    { word: "probation officer", def: "supervisor of criminals not in prison" },
                    { word: "Justice of the Peace", def: "non-lawyer acting as local judge" },
                    { word: "shoplifting", def: "stealing from a shop" },
                    { word: "truancy", def: "staying away from school without permission" },
                    { word: "housebreaking", def: "entering someone's house by force" },
                    { word: "embezzlement", def: "stealing money from one's company" }
                ]
            },
            {
                title: "Surveillance & Privacy ",
                words: [
                    { word: "invasion of privacy", def: "interfering without permission" },
                    { word: "anonymity", def: "keeping identity secret" },
                    { word: "surveillance", def: "careful watching by authorities" },
                    { word: "monitor", def: "check regularly for progress" },
                    { word: "database", def: "computer-stored information collection" },
                    { word: "face recognition", def: "identifying by facial features" },
                    { word: "software", def: "computer programs" },
                    { word: "trafficmaster", def: "traffic information system" },
                    { word: "track", def: "follow movements" },
                    { word: "scan", def: "look at pictures carefully" },
                    { word: "camera feed", def: "playback of camera images" },
                    { word: "mount", def: "place firmly on something" },
                    { word: "license", def: "give official permission" },
                    { word: "retain", def: "continue to have" },
                    { word: "transmit", def: "send data using technology" },
                    { word: "gauge", def: "measure, calculate" },
                    { word: "cross-reference", def: "check against known information" },
                    { word: "log on", def: "start using computer system" },
                    { word: "topography", def: "physical features of area" },
                    { word: "trawl", def: "searching through many things" },
                    { word: "invasive", def: "spreading quickly; disturbing" },
                    { word: "intrusive", def: "disturbing one's mood/life" },
                    { word: "invisibly", def: "without being seen" },
                    { word: "investigatory", def: "investigating something" },
                    { word: "civil liberties", def: "personal freedoms and rights" },
                    { word: "number plate", def: "sign showing vehicle's number" },
                    { word: "digit", def: "any number from 0 to 9" },
                    { word: "remainder", def: "what stays after others have gone" },
                    { word: "partial", def: "not complete or whole" },
                    { word: "fraud", def: "crime of tricking others for money" }
                ]
            },
            {
                title: "Social Issues & General Advanced ",
                words: [
                    { word: "drought", def: "long period without rain" },
                    { word: "shelter", def: "building for homeless people" },
                    { word: "lay off", def: "stop employing (no work available)" },
                    { word: "harsh", def: "cruel, showing no sympathy" },
                    { word: "retrain", def: "teach new skills for new job" },
                    { word: "pressing", def: "needing immediate attention" },
                    { word: "local authorities", def: "organization for public services" },
                    { word: "equality", def: "same rights for everyone" },
                    { word: "hooligan", def: "violent young person in public" },
                    { word: "densely populated", def: "many people in small area" },
                    { word: "pre-determined", def: "decided beforehand" },
                    { word: "borough", def: "district within larger town" },
                    { word: "boom", def: "increase rapidly" },
                    { word: "philanthropist", def: "person who gives money to help others" },
                    { word: "conservation", def: "protection from destruction" },
                    { word: "humanitarian", def: "helping those who suffer" },
                    { word: "scarcity", def: "not enough of something" },
                    { word: "aftermath", def: "situation after harmful event" },
                    { word: "devastate", def: "damage or destroy totally" },
                    { word: "prevail", def: "be normal or most common" },
                    { word: "debt", def: "money owed" },
                    { word: "rage", def: "strong uncontrollable anger" },
                    { word: "assault", def: "attack someone" },
                    { word: "donation", def: "gift to charity/organization" },
                    { word: "violation", def: "breaking a promise/agreement" },
                    { word: "revocation", def: "cancellation of law/agreement" },
                    { word: "impose", def: "force people to accept something" },
                    { word: "restrict", def: "put a limit on something" },
                    { word: "mission statement", def: "official statement of organization's aims" },
                    { word: "overseas", def: "in foreign countries" }
                ]
            }
        ];
        let currentRound = 0;
        let scores = [0, 0, 0, 0, 0];
        let timerInterval = null;
        let timeLeft = 60;
        let initialTime = 60;
        let soundEnabled = true;
        let currentFilter = 'all';
        let revealedCount = 0;
        let sidebarVisible = true;
        function toggleSidebar() {
            sidebarVisible = !sidebarVisible;
            const sidebar = document.getElementById('sidebar');
            const toggle = document.getElementById('sidebarToggle');
            if (sidebarVisible) {
                sidebar.classList.remove('hidden');
                toggle.classList.add('with-sidebar');
                toggle.textContent = '◀';
            } else {
                sidebar.classList.add('hidden');
                toggle.classList.remove('with-sidebar');
                toggle.textContent = '▶';
            }
        }
        function toggleSound() {
            soundEnabled = !soundEnabled;
            document.getElementById('soundToggle').textContent = soundEnabled ? '🔊' : '🔇';
            showNotification(soundEnabled ? 'Sound Enabled' : 'Sound Muted');
        }
        function playSound(type = 'beep') {
            if (!soundEnabled) return;
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            if (type === 'beep') {
                oscillator.frequency.value = 800;
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.5);
            } else if (type === 'success') {
                oscillator.frequency.value = 1000;
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.2);
            } else if (type === 'click') {
                oscillator.frequency.value = 400;
                oscillator.type = 'square';
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            }
        }
        function showNotification(text) {
            const notification = document.getElementById('notification');
            const notificationText = document.getElementById('notificationText');
            notificationText.textContent = text;
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
        function init() {
            renderWords();
            updateScores();
            updateStats();
        }
        function renderWords() {
            const grid = document.getElementById('wordGrid');
            grid.innerHTML = '';
            revealedCount = 0;
            rounds[currentRound].words.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'word-card';
                card.style.animationDelay = `${index * 0.04}s`;
                card.innerHTML = `
                    <div class="word-card-inner">
                        <div class="word-card-front">
                            <div class="word">${item.word}</div>
                        </div>
                        <div class="word-card-back">
                            <div class="word">${item.word}</div>
                            <div class="definition">${item.def}</div>
                        </div>
                    </div>
                `;
                card.addEventListener('click', function() {
                    const wasFlipped = this.classList.contains('flipped');
                    this.classList.toggle('flipped');
                    if (!wasFlipped) {
                        revealedCount++;
                        playSound('click');
                    } else {
                        revealedCount--;
                    }
                    updateStats();
                });
                grid.appendChild(card);
            });
            updateStats();
        }
        function switchRound(roundIndex) {
            currentRound = roundIndex;
            document.getElementById('roundTitle').textContent = rounds[roundIndex].title;
            const buttons = document.querySelectorAll('.round-btn');
            buttons.forEach((btn, i) => {
                btn.classList.toggle('active', i === roundIndex);
            });
            renderWords();
            resetTimer();
            updateStats();
            playSound('success');
            showNotification(`Switched to ${rounds[roundIndex].title}`);
        }
        function resetRound() {
            renderWords();
            resetTimer();
            playSound('success');
            showNotification('Round Reset');
        }
        function changeScore(teamIndex, delta) {
            scores[teamIndex] = Math.max(0, scores[teamIndex] + delta);
            
            if (delta > 0) {
                playSound('success');
            }
            updateScores();
        }
        function updateScores() {
            scores.forEach((score, i) => {
                document.getElementById(`score${i + 1}`).textContent = score;
            });
        }
        function filterWords(filter) {
            currentFilter = filter;
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            const cards = document.querySelectorAll('.word-card');
            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (filter === 'revealed') {
                    card.style.display = card.classList.contains('flipped') ? 'block' : 'none';
                } else if (filter === 'hidden') {
                    card.style.display = !card.classList.contains('flipped') ? 'block' : 'none';
                }
            });
            playSound('click');
        }
        function flipAllCards() {
            const cards = document.querySelectorAll('.word-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    if (!card.classList.contains('flipped')) {
                        card.classList.add('flipped');
                        playSound('click');
                    }
                }, index * 30);
            });
            revealedCount = rounds[currentRound].words.length;
            updateStats();
            showNotification('All Cards Revealed');
        }
        function shuffleCards() {
            const grid = document.getElementById('wordGrid');
            const cards = Array.from(grid.children);
            for (let i = cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cards[i], cards[j]] = [cards[j], cards[i]];
            }
            grid.innerHTML = '';
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.04}s`;
                card.classList.remove('flipped');
                grid.appendChild(card);
            });
            revealedCount = 0;
            updateStats();
            playSound('success');
            showNotification('Cards Shuffled');
        }
        function endGame() {
            updateLeaderboard();
            document.getElementById('leaderboardModal').classList.add('show');
            playSound('success');
        }
        function closeLeaderboard() {
            document.getElementById('leaderboardModal').classList.remove('show');
        }
        function updateStats() {
            document.getElementById('totalWords').textContent = rounds[currentRound].words.length;
            document.getElementById('revealedWords').textContent = revealedCount;
            document.getElementById('remainingWords').textContent = rounds[currentRound].words.length - revealedCount;
            document.getElementById('currentRoundStat').textContent = currentRound + 1;
            document.getElementById('revealedCount').textContent = revealedCount;
            document.getElementById('totalCount').textContent = rounds[currentRound].words.length;
        }
        function updateLeaderboard() {
            const teamNames = ['Team Alpha', 'Team Beta', 'Team Gamma', 'Team Delta', 'Team Omega'];
            const teamColors = ['var(--team1)', 'var(--team2)', 'var(--team3)', 'var(--team4)', 'var(--team5)'];
            
            const leaderboard = scores.map((score, i) => ({
                name: teamNames[i],
                score: score,
                color: teamColors[i],
                index: i
            })).sort((a, b) => b.score - a.score);
            const leaderboardList = document.getElementById('leaderboardList');
            leaderboardList.innerHTML = '';
            leaderboard.forEach((team, rank) => {
                const item = document.createElement('div');
                item.className = `leaderboard-item rank-${rank + 1}`;
                item.innerHTML = `
                    <div class="rank">${rank + 1}</div>
                    <div class="team-info">
                        <div class="leaderboard-team-name" style="color: ${team.color}">${team.name}</div>
                    </div>
                    <div class="leaderboard-score" style="color: ${team.color}">${team.score}</div>
                `;
                leaderboardList.appendChild(item);
            });
        }
        function startTimer() {
            const inputValue = parseInt(document.getElementById('sidebarTimerInput').value);
            if (!timerInterval && inputValue > 0) {
                timeLeft = inputValue;
                initialTime = inputValue;
                document.getElementById('sidebarStartBtn').style.display = 'none';
                document.getElementById('sidebarPauseBtn').style.display = 'inline-block';
                timerInterval = setInterval(() => {
                    timeLeft--;
                    updateTimerDisplay();
                    if (timeLeft <= 0) {
                        pauseTimer();
                        playSound('beep');
                        showNotification('Time\'s Up!');
                    }
                }, 1000);
            }
        }
        function pauseTimer() {
            clearInterval(timerInterval);
            timerInterval = null;
            document.getElementById('sidebarStartBtn').style.display = 'inline-block';
            document.getElementById('sidebarPauseBtn').style.display = 'none';
        }
        function resetTimer() {
            pauseTimer();
            timeLeft = parseInt(document.getElementById('sidebarTimerInput').value) || 60;
            initialTime = timeLeft;
            updateTimerDisplay();
        }
        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const display = document.getElementById('sidebarTimerDisplay');
            display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            if (timeLeft <= 10 && timeLeft > 0) {
                display.classList.add('warning');
            } else {
                display.classList.remove('warning');
            }
            const progress = (timeLeft / initialTime) * 100;
            document.getElementById('sidebarTimerProgress').style.width = progress + '%';
        }
        init();

