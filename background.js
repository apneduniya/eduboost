chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.delay) {
        setTimeout(function () {
            playSound();
        }, request.delay);
    }
});

function playSound() {

    const soundFile = "notification.mp3"; // Replace with your sound file
    const audioUrl = chrome.runtime.getURL(soundFile);

    // Send a message to the content script to call a function
    chrome.runtime.sendMessage({ play: audioUrl });

}


function showMotivationalQuote() {
    // Get a random quote 
    const quote = "Your motivational quote goes here.";

    // Display the quote in a notification
    const notificationOptions = {
        type: "basic",
        iconUrl: "/assets/icon.jpg",
        title: "EduBoost",
        message: quote
    };
    
    chrome.notifications.create("", notificationOptions, () => { });
}

chrome.alarms.create("motivationalAlarm", {
    periodInMinutes: 15
});

chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === "motivationalAlarm") {
        showMotivationalQuote();
    }
});