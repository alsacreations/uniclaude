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
    this.stepsList = document.getElementById('quiz-steps');
    this.inputForm = document.getElementById('quiz-input-area');

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
        this.totalCharsCount.textContent = `${this.allConcepts.length}\u00A0concepts Unicode`;
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

    this.inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.checkAnswer();
    });
  }

  startQuiz() {
    // Copies : un nouveau parcours repart de zéro
    this.selectedConcepts = this.shuffleArray([...this.allConcepts]).slice(0, 10).map((c) => ({ ...c, isCorrect: undefined }));
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
    this.setFeedback('', '');

    // Clear success states
    this.playSection.classList.remove('celebrate');
    this.userInput.classList.remove('success');

    // Update Content : chaque signe dans son cadratin, séparés par des « + »
    this.renderConcept(concept.concept);
    this.clueText.textContent = concept.clue;
    this.answerText.textContent = concept.answer;

    // Update Progress
    this.stepText.textContent = `Question ${this.currentIndex + 1} sur ${this.selectedConcepts.length}`;
    this.renderSteps();
  }

  renderConcept(conceptText) {
    this.charactersDisplay.innerHTML = '';
    conceptText.split(' + ').forEach((part, index) => {
      if (index > 0) {
        const plus = document.createElement('span');
        plus.className = 'plus';
        plus.setAttribute('aria-hidden', 'true');
        plus.textContent = '+';
        this.charactersDisplay.appendChild(plus);
      }
      const tile = document.createElement('span');
      tile.className = 'tile';
      const glyph = document.createElement('span');
      glyph.textContent = part;
      tile.appendChild(glyph);
      this.charactersDisplay.appendChild(tile);
    });
  }

  renderSteps() {
    this.stepsList.innerHTML = '';
    this.selectedConcepts.forEach((concept, index) => {
      const li = document.createElement('li');
      let state = 'à venir';
      if (index === this.currentIndex) {
        li.className = 'is-current';
        state = 'en cours';
      } else if (concept.isCorrect === true) {
        li.className = 'is-ok';
        state = 'trouvée';
      } else if (concept.isCorrect === false) {
        li.className = 'is-ko';
        state = 'manquée';
      }
      li.innerHTML = '<span class="visually-hidden"></span>';
      li.firstChild.textContent = `Question ${index + 1}\u00A0: ${state}`;
      this.stepsList.appendChild(li);
    });
  }

  setFeedback(text, kind) {
    const icons = {
      success: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20 6 9 17l-5-5"/></svg>',
      error: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    };
    this.feedbackMsg.className = `feedback-msg ${kind}`.trim();
    this.feedbackMsg.innerHTML = icons[kind] || '';
    this.feedbackMsg.append(text);
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
    if (!userVal) {
      this.setFeedback('Écris une réponse avant de valider.', '');
      return;
    }

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

    this.setFeedback("Correct, bien joué\u202F!", 'success');

    // Visual feedback
    this.userInput.classList.add('success');
    this.playSection.classList.add('celebrate');
    this.createConfetti();

    this.revealAnswer(true);
  }

  createConfetti() {
    // Pas d'animation si l'utilisateur la refuse
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const glyphs = ['✦', '✶', '❋', '✳', '✺', '★', '⁂', '※'];
    const colors = ['var(--accent-1)', 'var(--accent-2)'];
    const container = this.charactersDisplay.parentElement;

    for (let i = 0; i < 24; i++) {
      const el = document.createElement('span');
      el.className = 'spark';
      el.setAttribute('aria-hidden', 'true');
      el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      el.style.color = colors[i % 2];
      el.style.fontSize = `${1.5 + Math.random() * 1.5}rem`;

      const angle = Math.random() * Math.PI * 2;
      const velocity = 100 + Math.random() * 200;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      const rot = (Math.random() - 0.5) * 360;

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
    this.setFeedback("Ce n’est pas ça. Essaie encore ou demande un indice\u202F!", 'error');

    // Shake animation on input
    this.userInput.classList.add('shake');
    setTimeout(() => this.userInput.classList.remove('shake'), 500);
  }

  giveUp() {
    if (!this.isQuestionActive) return;
    this.isQuestionActive = false;
    this.selectedConcepts[this.currentIndex].isCorrect = false;

    this.setFeedback("Dommage, voici la réponse.", '');
    this.renderSteps();

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
    // Le focus va au titre du bilan, annoncé par les lecteurs d'écran
    document.getElementById('finish-title')?.focus();
  }

  generateSummary() {
    const total = this.selectedConcepts.length;
    this.summaryContainer.innerHTML = `
      <div class="final-score">
        <h1 id="finish-title" tabindex="-1"></h1>
        <p class="final-number"><strong>${this.score}</strong><span>\u202F/\u202F${total}</span></p>
      </div>
    `;
    this.summaryContainer.querySelector('h1').textContent = this.getMotivationMessage();
    this.summaryContainer.querySelector('.final-number').setAttribute('aria-label', `Score final : ${this.score} sur ${total}`);

    const list = document.createElement('ol');
    list.className = 'summary-list';

    const okIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20 6 9 17l-5-5"/></svg>';
    const koIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>';

    this.selectedConcepts.forEach((concept) => {
      const item = document.createElement('li');
      item.className = 'summary-item';

      const status = document.createElement('span');
      status.className = concept.isCorrect ? 'summary-status' : 'summary-status is-ko';
      status.innerHTML = concept.isCorrect ? okIcon : koIcon;
      status.append(concept.isCorrect ? 'Trouvé' : 'Manqué');

      const chars = document.createElement('span');
      chars.className = 'summary-chars';
      chars.textContent = concept.concept.split(' + ').join(' ');

      const answer = document.createElement('span');
      answer.className = 'summary-answer';
      answer.textContent = concept.answer;

      item.append(status, chars, answer);
      list.appendChild(item);
    });
    this.summaryContainer.appendChild(list);
  }

  getMotivationMessage() {
    const ratio = this.score / this.selectedConcepts.length;
    if (ratio === 1) return "Un sans-faute, chapeau\u202F!";
    if (ratio >= 0.8) return "Excellent travail\u202F!";
    if (ratio >= 0.5) return "Bien joué\u202F!";
    return "Tu feras mieux la prochaine fois\u202F!";
  }
}

// ===== Thème clair / sombre (partagé avec l'explorateur) =====
function setupThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  const current = () =>
    document.documentElement.dataset.theme ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const sync = () => toggle.setAttribute('aria-pressed', current() === 'dark' ? 'true' : 'false');
  sync();
  toggle.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('uniclaude-theme', next);
    } catch (e) {}
    sync();
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  new UniClaudeQuiz();
});
