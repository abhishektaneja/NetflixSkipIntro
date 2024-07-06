function clickSkipButtons() {
    // Selectors for Skip Intro and Skip Recap buttons
    const skipIntroButton = document.querySelector('button[data-uia="player-skip-intro"]');
    const skipRecapButton = document.querySelector('button[data-uia="player-skip-recap"]');

    // Click the Skip Intro button if it exists
    if (skipIntroButton) {
        skipIntroButton.click();
    }

    // Click the Skip Recap button if it exists
    if (skipRecapButton) {
        skipRecapButton.click();
    }
}

// Run the function every second to check for the skip buttons
setInterval(clickSkipButtons, 1000);
