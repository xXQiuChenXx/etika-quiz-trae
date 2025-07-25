// DOM Elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const resetBtn = document.getElementById('reset-btn');
const resultContainer = document.getElementById('result-container');
const resultHeader = document.getElementById('result-header');
const correctAnswerText = document.getElementById('correct-answer');
const explanationText = document.getElementById('explanation');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const correctCount = document.getElementById('correct-count');
const wrongCount = document.getElementById('wrong-count');
const totalCount = document.getElementById('total-count');

// Mode buttons
const sequentialModeBtn = document.getElementById('sequential-mode');
const randomModeBtn = document.getElementById('random-mode');
const wrongModeModeBtn = document.getElementById('wrong-mode');

// Quiz state
let currentQuestionIndex = 0;
let selectedOption = null;
let quizMode = 'sequential'; // Default mode
let userAnswers = {};
let wrongQuestions = [];
let shuffledQuestions = [];

// Initialize the quiz
function initQuiz() {
    loadUserProgress();
    updateStats();
    setQuizMode(quizMode);
    renderQuestion();
}

// Set quiz mode
function setQuizMode(mode) {
    quizMode = mode;
    
    // Update active button
    sequentialModeBtn.classList.remove('active');
    randomModeBtn.classList.remove('active');
    wrongModeModeBtn.classList.remove('active');
    
    if (mode === 'sequential') {
        sequentialModeBtn.classList.add('active');
        shuffledQuestions = [...quizQuestions];
        currentQuestionIndex = 0;
    } else if (mode === 'random') {
        randomModeBtn.classList.add('active');
        shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    } else if (mode === 'wrong') {
        wrongModeModeBtn.classList.add('active');
        if (wrongQuestions.length > 0) {
            shuffledQuestions = wrongQuestions.map(id => quizQuestions.find(q => q.id === id));
            currentQuestionIndex = 0;
        } else {
            // If no wrong questions, show a message and default to sequential
            alert('Tiada soalan yang dijawab salah. Sila jawab beberapa soalan terlebih dahulu.');
            setQuizMode('sequential');
            return;
        }
    }
    
    saveUserProgress();
    renderQuestion();
}

// Render current question
function renderQuestion() {
    if (shuffledQuestions.length === 0) {
        questionText.textContent = 'Tiada soalan tersedia.';
        optionsContainer.innerHTML = '';
        submitBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }
    
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    
    // Shuffle options
    const shuffledOptions = [...currentQuestion.options].sort(() => Math.random() - 0.5);
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option elements
    shuffledOptions.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.dataset.id = option.id;
        
        const optionLetter = document.createElement('span');
        optionLetter.className = 'option-letter';
        optionLetter.textContent = option.id;
        
        const optionText = document.createElement('span');
        optionText.className = 'option-text';
        optionText.textContent = option.text;
        
        optionElement.appendChild(optionLetter);
        optionElement.appendChild(optionText);
        
        // Add click event
        optionElement.addEventListener('click', () => selectOption(option.id));
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Reset state for new question
    selectedOption = null;
    submitBtn.disabled = true;
    nextBtn.disabled = true;
    resultContainer.classList.add('hidden');
    
    // Update progress
    updateProgress();
    
    // If this question was already answered, show the previous answer
    const questionId = currentQuestion.id;
    if (userAnswers[questionId]) {
        const previousAnswer = userAnswers[questionId];
        selectOption(previousAnswer);
        checkAnswer();
    }
}

// Select an option
function selectOption(optionId) {
    selectedOption = optionId;
    
    // Update UI
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        if (option.dataset.id === optionId) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
    
    // Enable submit button
    submitBtn.disabled = false;
}

// Check answer
function checkAnswer() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;
    const isCorrect = selectedOption === correctAnswer;
    
    // Store user's answer
    userAnswers[currentQuestion.id] = selectedOption;
    
    // Update wrong questions list
    const wrongIndex = wrongQuestions.indexOf(currentQuestion.id);
    if (isCorrect && wrongIndex !== -1) {
        // Remove from wrong questions if answered correctly
        wrongQuestions.splice(wrongIndex, 1);
    } else if (!isCorrect && wrongIndex === -1) {
        // Add to wrong questions if answered incorrectly
        wrongQuestions.push(currentQuestion.id);
    }
    
    // Update UI
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        const optionId = option.dataset.id;
        
        if (optionId === correctAnswer) {
            option.classList.add('correct');
        } else if (optionId === selectedOption && selectedOption !== correctAnswer) {
            option.classList.add('wrong');
        }
        
        // Disable option clicks
        option.style.pointerEvents = 'none';
    });
    
    // Show result
    resultContainer.classList.remove('hidden');
    
    if (isCorrect) {
        resultHeader.textContent = 'Jawapan Betul!';
        resultHeader.className = 'correct';
        correctAnswerText.textContent = '';
        explanationText.textContent = currentQuestion.explanation.correct;
    } else {
        resultHeader.textContent = 'Jawapan Salah!';
        resultHeader.className = 'wrong';
        correctAnswerText.textContent = `Jawapan yang betul: ${correctAnswer}`;
        explanationText.textContent = currentQuestion.explanation.incorrect[selectedOption];
    }
    
    // Enable next button, disable submit button
    submitBtn.disabled = true;
    nextBtn.disabled = false;
    
    // Update stats
    updateStats();
    
    // Save progress
    saveUserProgress();
}

// Go to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    // Check if we've reached the end of the questions
    if (currentQuestionIndex >= shuffledQuestions.length) {
        if (quizMode === 'wrong' && wrongQuestions.length > 0) {
            // Refresh wrong questions list for wrong mode
            setQuizMode('wrong');
        } else {
            // Loop back to the beginning
            currentQuestionIndex = 0;
        }
    }
    
    renderQuestion();
}

// Update progress bar and text
function updateProgress() {
    const totalQuestions = shuffledQuestions.length;
    const currentQuestion = currentQuestionIndex + 1;
    
    const progressPercentage = (currentQuestion / totalQuestions) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `Soalan ${currentQuestion}/${totalQuestions}`;
}

// Update statistics
function updateStats() {
    let correct = 0;
    let wrong = 0;
    
    // Count correct and wrong answers
    Object.keys(userAnswers).forEach(questionId => {
        const question = quizQuestions.find(q => q.id === parseInt(questionId));
        if (question && userAnswers[questionId] === question.correctAnswer) {
            correct++;
        } else {
            wrong++;
        }
    });
    
    correctCount.textContent = correct;
    wrongCount.textContent = wrong;
    totalCount.textContent = Object.keys(userAnswers).length;
}

// Reset quiz
function resetQuiz() {
    if (confirm('Adakah anda pasti mahu mula semula? Semua kemajuan akan dihapuskan.')) {
        currentQuestionIndex = 0;
        selectedOption = null;
        userAnswers = {};
        wrongQuestions = [];
        
        localStorage.removeItem('etikaQuizProgress');
        
        setQuizMode('sequential');
        updateStats();
        renderQuestion();
    }
}

// Save user progress to localStorage
function saveUserProgress() {
    const progress = {
        currentQuestionIndex,
        quizMode,
        userAnswers,
        wrongQuestions,
    };
    
    localStorage.setItem('etikaQuizProgress', JSON.stringify(progress));
}

// Load user progress from localStorage
function loadUserProgress() {
    const savedProgress = localStorage.getItem('etikaQuizProgress');
    
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        
        currentQuestionIndex = progress.currentQuestionIndex || 0;
        quizMode = progress.quizMode || 'sequential';
        userAnswers = progress.userAnswers || {};
        wrongQuestions = progress.wrongQuestions || [];
    }
}

// Event listeners
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
resetBtn.addEventListener('click', resetQuiz);

sequentialModeBtn.addEventListener('click', () => setQuizMode('sequential'));
randomModeBtn.addEventListener('click', () => setQuizMode('random'));
wrongModeModeBtn.addEventListener('click', () => setQuizMode('wrong'));

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', initQuiz);