function clickSkipIntroButton() {
    const skipButton = document.querySelector('button[data-uia="player-skip-intro"]');
    if (skipButton) {
        skipButton.click();
    }
}

// Run the function every second to check for the skip button
setInterval(clickSkipIntroButton, 1000);
