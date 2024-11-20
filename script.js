const facts = [
    "I am 20 years old and live near the beautiful mountains.",
    "I love hiking and have explored five different mountain ranges.",
    "I am an avid nature photographer and take weekly mountain trips.",
    "I speak three languages and use them while mountain trekking.",
    "I'm learning mountain climbing techniques in my free time."
];

// Get DOM elements
const factDisplay = document.getElementById('fact-display');
const generateBtn = document.getElementById('generate-btn');

// Function to get a random fact
const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
};

// Function to display a new fact with animation
const displayNewFact = () => {
    factDisplay.style.opacity = '0';
    setTimeout(() => {
        factDisplay.textContent = getRandomFact();
        factDisplay.style.opacity = '1';
    }, 300);
};

// Event listener for button click
generateBtn.addEventListener('click', displayNewFact);

// Display initial fact
displayNewFact();
