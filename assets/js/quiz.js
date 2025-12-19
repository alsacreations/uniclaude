/**
 * UniClaude Quiz Logic
 * Handles loading concepts, shuffling, and managing the quiz state.
 */

class UniClaudeQuiz {
  constructor() {
    this.allConcepts = [];
    this.selectedConcepts = [];
    this.currentIndex = 0;
    this.currentStep = 0; // 0: characters, 1: clue, 2: answer

    // DOM Elements
    this.introSection = document.getElementById('quiz-intro');
    this.playSection = document.getElementById('quiz-play');
    this.finishSection = document.getElementById('quiz-finish');

    this.startBtn = document.getElementById('start-quiz');
    this.restartBtn = document.getElementById('restart-quiz');

    this.charactersDisplay = document.getElementById('concept-characters');
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
    this.btnShowAnswer.addEventListener('click', () => this.showAnswer());
    this.btnNext.addEventListener('click', () => this.nextQuestion());
  }

  startQuiz() {
    this.selectedConcepts = this.shuffleArray([...this.allConcepts]).slice(0, 10);
    this.currentIndex = 0;
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

    // Reset state
    this.currentStep = 0;
    this.clueContainer.classList.add('hidden');
    this.answerContainer.classList.add('hidden');
    this.btnShowClue.classList.remove('hidden');
    this.btnShowAnswer.classList.add('hidden');
    this.btnNext.classList.add('hidden');

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

  showClue() {
    this.currentStep = 1;
    this.clueContainer.classList.remove('hidden');
    this.btnShowClue.classList.add('hidden');
    this.btnShowAnswer.classList.remove('hidden');
  }

  showAnswer() {
    this.currentStep = 2;
    this.answerContainer.classList.remove('hidden');
    this.btnShowAnswer.classList.add('hidden');
    this.btnNext.classList.remove('hidden');
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
    this.summaryContainer.innerHTML = '';
    this.selectedConcepts.forEach(concept => {
      const item = document.createElement('div');
      item.className = 'summary-item';
      item.innerHTML = `
        <span class="summary-chars">${concept.concept}</span>
        <span class="summary-answer">${concept.answer}</span>
      `;
      this.summaryContainer.appendChild(item);
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new UniClaudeQuiz();
});
