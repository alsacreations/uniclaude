/**
 * UniClaude Quiz Logic
 * Handles loading concepts, shuffling, and managing the quiz state.
 */

class UniClaudeQuiz {
  constructor() {
    this.allConcepts = [];
    this.selectedConcepts = [];
    this.currentIndex = 0;
    this.score = 0;
    this.isQuestionActive = false;

    // DOM Elements
    this.introSection = document.getElementById('quiz-intro');
    this.playSection = document.getElementById('quiz-play');
    this.finishSection = document.getElementById('quiz-finish');

    this.startBtn = document.getElementById('start-quiz');
    this.restartBtn = document.getElementById('restart-quiz');

    this.charactersDisplay = document.getElementById('concept-characters');

    // Input & Feedback
    this.userInput = document.getElementById('user-guess');
    this.btnSubmit = document.getElementById('btn-submit-guess');
    this.feedbackMsg = document.getElementById('feedback-msg');
    this.scoreDisplay = document.getElementById('current-score');

    this.clueContainer = document.getElementById('clue-container');
    this.clueText = document.getElementById('concept-clue');
    this.answerContainer = document.getElementById('answer-container');
    this.answerText = document.getElementById('concept-answer');

    this.stepText = document.getElementById('quiz-step-text');
    this.progressFill = document.getElementById('progress-fill');

    this.btnShowClue = document.getElementById('btn-show-clue');
    this.btnShowAnswer = document.getElementById('btn-show-answer');
    this.btnNext = document.getElementById('btn-next');

    this.summaryContainer = document.getElementById('quiz-summary');
    this.totalCharsCount = document.getElementById('totalCharsCount');

    this.init();
  }

  async init() {
    try {
      const response = await fetch('assets/js/concepts.json');
      this.allConcepts = await response.json();

      if (this.totalCharsCount) {
        this.totalCharsCount.textContent = `${this.allConcepts.length} concepts Unicode`;
      }

      this.attachEventListeners();
    } catch (error) {
      console.error('Failed to load concepts:', error);
      alert('Erreur lors du chargement des concepts. Veuillez réessayer plus tard.');
    }
  }

  attachEventListeners() {
    this.startBtn.addEventListener('click', () => this.startQuiz());
    this.restartBtn.addEventListener('click', () => this.startQuiz());

    this.btnShowClue.addEventListener('click', () => this.showClue());
    this.btnShowAnswer.addEventListener('click', () => this.giveUp());
    this.btnNext.addEventListener('click', () => this.nextQuestion());

    this.btnSubmit.addEventListener('click', () => this.checkAnswer());
    this.userInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.checkAnswer();
    });
  }

  startQuiz() {
    this.selectedConcepts = this.shuffleArray([...this.allConcepts]).slice(0, 10);
    this.currentIndex = 0;
    this.score = 0;
    this.updateScoreDisplay();
    this.showSection('play');
    this.updateQuestion();
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  showSection(section) {
    this.introSection.classList.add('hidden');
    this.playSection.classList.add('hidden');
    this.finishSection.classList.add('hidden');

    if (section === 'intro') this.introSection.classList.remove('hidden');
    if (section === 'play') this.playSection.classList.remove('hidden');
    if (section === 'finish') this.finishSection.classList.remove('hidden');
  }

  updateQuestion() {
    const concept = this.selectedConcepts[this.currentIndex];
    this.isQuestionActive = true;

    // Reset UI state
    this.clueContainer.classList.add('hidden');
    this.answerContainer.classList.add('hidden');

    this.btnShowClue.classList.remove('hidden');
    this.btnShowClue.disabled = false;

    this.btnShowAnswer.classList.remove('hidden');
    this.btnShowAnswer.disabled = false;

    this.btnNext.classList.add('hidden');

    this.userInput.value = '';
    this.userInput.disabled = false;
    this.userInput.focus();

    this.btnSubmit.disabled = false;
    this.feedbackMsg.textContent = '';
    this.feedbackMsg.className = 'feedback-msg hidden';

    // Clear success states
    this.playSection.classList.remove('celebrate');
    this.userInput.classList.remove('success');

    // Update Content
    this.charactersDisplay.textContent = concept.concept;
    this.clueText.textContent = concept.clue;
    this.answerText.textContent = concept.answer;

    // Update Progress
    const progress = ((this.currentIndex + 1) / this.selectedConcepts.length) * 100;
    this.progressFill.style.width = `${progress}%`;
    this.stepText.textContent = `Question ${this.currentIndex + 1} / ${this.selectedConcepts.length}`;

    // Animation
    this.charactersDisplay.style.animation = 'none';
    this.charactersDisplay.offsetHeight; // trigger reflow
    this.charactersDisplay.style.animation = null;
  }

  normalizeString(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  checkAnswer() {
    if (!this.isQuestionActive) return;

    const userVal = this.normalizeString(this.userInput.value.trim());
    if (!userVal) return;

    const currentConcept = this.selectedConcepts[this.currentIndex];
    const keywords = currentConcept.keyword || []; // Safety check

    // Check if user input contains any of the keywords
    const isCorrect = keywords.some(k => userVal.includes(this.normalizeString(k)));

    if (isCorrect) {
      this.handleSuccess();
    } else {
      this.handleFailure();
    }
  }

  handleSuccess() {
    this.isQuestionActive = false;
    this.selectedConcepts[this.currentIndex].isCorrect = true;
    this.score++;
    this.updateScoreDisplay();

    this.feedbackMsg.textContent = "✅ Correct ! Bien joué.";
    this.feedbackMsg.className = 'feedback-msg success';

    // Visual feedback
    this.userInput.classList.add('success');
    this.playSection.classList.add('celebrate');
    this.createConfetti();

    this.revealAnswer(true);
  }

  createConfetti() {
    const emojis = ['🎉', '✨', '👏', '🦄', '⭐', '🎈'];
    const container = this.playSection;

    for (let i = 0; i < 30; i++) {
      const el = document.createElement('div');
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.position = 'absolute';
      el.style.left = '50%';
      el.style.top = '50%';
      el.style.transform = 'translate(-50%, -50%)';
      el.style.pointerEvents = 'none';
      el.style.fontSize = `${1.5 + Math.random()}rem`;
      el.style.zIndex = '100';
      el.style.opacity = '1';

      // Random direction
      const angle = Math.random() * Math.PI * 2;
      const velocity = 100 + Math.random() * 200; // exploded distance
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      const rot = (Math.random() - 0.5) * 720;

      el.animate([
        { transform: 'translate(-50%, -50%) scale(0.5) rotate(0deg)', opacity: 1 },
        { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.2) rotate(${rot}deg)`, opacity: 0 }
      ], {
        duration: 800 + Math.random() * 600,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        fill: 'forwards'
      }).onfinish = () => el.remove();

      container.appendChild(el);
    }
  }

  handleFailure() {
    this.feedbackMsg.textContent = "❌ Ce n'est pas ça. Essayez encore ou demandez un indice !";
    this.feedbackMsg.className = 'feedback-msg error';

    // Shake animation on input
    this.userInput.classList.add('shake');
    setTimeout(() => this.userInput.classList.remove('shake'), 500);
  }

  giveUp() {
    if (!this.isQuestionActive) return;
    this.isQuestionActive = false;
    this.selectedConcepts[this.currentIndex].isCorrect = false;

    this.feedbackMsg.textContent = "Dommage ! Voici la réponse.";
    this.feedbackMsg.className = 'feedback-msg';

    this.revealAnswer(false);
  }

  revealAnswer(isWin) {
    this.userInput.disabled = true;
    this.btnSubmit.disabled = true;

    this.btnShowClue.disabled = true; // Disable instead of hide to keep layout stable often better
    this.btnShowAnswer.classList.add('hidden');

    this.answerContainer.classList.remove('hidden');
    this.btnNext.classList.remove('hidden');
    this.btnNext.focus();
  }

  showClue() {
    this.clueContainer.classList.remove('hidden');
    this.btnShowClue.classList.add('hidden'); // One-time use usually
  }

  updateScoreDisplay() {
    this.scoreDisplay.textContent = this.score;
  }

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex < this.selectedConcepts.length) {
      this.updateQuestion();
    } else {
      this.finishQuiz();
    }
  }

  finishQuiz() {
    this.showSection('finish');
    this.generateSummary();
  }

  generateSummary() {
    this.summaryContainer.innerHTML = `
      <div class="final-score">
        <h3>Score final : ${this.score} / ${this.selectedConcepts.length}</h3>
        <p>${this.getMotivationMessage()}</p>
      </div>
    `;

    // List details if needed, or just the score
    // User requested simpler flow, but retained summary list is nice
    const list = document.createElement('div');
    list.className = 'summary-list';

    this.selectedConcepts.forEach(concept => {
      const item = document.createElement('div');
      item.className = 'summary-item';

      const status = concept.isCorrect
        ? '<span class="status-icon" aria-label="Correct">✅</span>'
        : '<span class="status-icon" aria-label="Incorrect">❌</span>';

      item.innerHTML = `
        ${status}
        <span class="summary-chars">${concept.concept}</span>
        <span class="summary-answer">${concept.answer}</span>
      `;
      list.appendChild(item);
    });
    this.summaryContainer.appendChild(list);
  }

  getMotivationMessage() {
    const ratio = this.score / this.selectedConcepts.length;
    if (ratio === 1) return "Incroyable ! Un sans-faute ! 🏆";
    if (ratio >= 0.8) return "Excellent travail ! 🌟";
    if (ratio >= 0.5) return "Bien joué ! 👍";
    return "Tu feras mieux la prochaine fois ! 💪";
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new UniClaudeQuiz();
});
