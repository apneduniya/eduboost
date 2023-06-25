
// function openTab(evt, tabName) {
//     // Get all tab content elements and hide them
//     let tabContent = document.getElementsByClassName('tab-content');
//     for (let i = 0; i < tabContent.length; i++) {
//       tabContent[i].style.display = 'none';
//     }
  
//     // Get all tab button elements and remove the active class
//     let tabButtons = document.getElementsByClassName('tab-button');
//     for (let i = 0; i < tabButtons.length; i++) {
//       tabButtons[i].className = tabButtons[i].className.replace(' active', '');
//     }
  
//     // Show the selected tab content and set the button as active
//     document.getElementById(tabName).style.display = 'block';
//     evt.currentTarget.className += ' active';
// }

document.addEventListener("DOMContentLoaded", function () {
    // const reminderButton = document.getElementById("reminder_button");
    // reminderButton.addEventListener("click", openTab(event, 'reminder'));

    // const motivatorButton = document.getElementById("motivator_button");
    // motivatorButton.addEventListener("click", openTab(event, 'motivator'));

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.play) {
            myFunction(request.play);
        }
    });
});
  
// Open the default tab
// document.getElementById('reminder').style.display = 'block';
// document.getElementsByClassName('tab-button')[0].className += ' active';
  


// Reminder

document.addEventListener("DOMContentLoaded", function () {
    let startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startReminder);

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.play) {
            myFunction(request.play);
        }
    });
});

function startReminder() {
    let minutesInput = document.getElementById("minutesInput");
    let minutes = parseInt(minutesInput.value);

    let randomMilliseconds = Math.floor(Math.random() * (minutes * 1000));
    let milliseconds = randomMilliseconds;

    chrome.runtime.sendMessage({ delay: minutes * 1000 });
}

// Function to be called
function myFunction(audio) {

    const alert = "Reminder!!!!!!!!!";

    // Display the quote in a notification
    const notificationOptions = {
        type: "basic",
        iconUrl: "/assets/icon.jpg",
        title: "EduBoost",
        message: alert
    };
    
    chrome.notifications.create("", notificationOptions, () => { });

    const audioPlayer = new Audio(audio);

    audioPlayer.play();
}


// Motivation


document.addEventListener("DOMContentLoaded", function () {
    // A random quote from an API or use a local set of quotes
    function fetchMotivationalQuote() {
        // Set of quotes
        const quotes = [
            "“All our dreams can come true, if we have the courage to pursue them.” —Walt Disney",
            "“You can either experience the pain of discipline or the pain of regret. The choice is yours.”",
            "“Don't be afraid to give up the good to go for the great.” —John D. Rockefeller",
            "“Magic is believing in yourself. If you can make that happen, you can make anything happen.” —Johann Wolfgang Von Goethe",
            "“No one is to blame for your future situation but yourself. If you want to be successful, then become ‘Successful.'” ―Jaymin Shah",
            "“Things may come to those who wait, but only the things left by those who hustle.” ―Abraham Lincoln",
            "“Everything comes to him who hustles while he waits.” ―Thomas Edison",
            "“Without hustle, talent will only carry you so far.” ―Gary Vaynerchuk",
            "“Work like there is someone working 24 hours a day to take it away from you.” ―Mark Cuban",
            "“Work like there is someone working 24 hours a day to take it away from you.” ―Mark Cuban",
            "“Work like there is someone working 24 hours a day to take it away from you.” ―Mark Cuban",
            "“Some people want it to happen, some wish it would happen, others make it happen.” ―Michael Jordan",
            "“Some people want it to happen, some wish it would happen, others make it happen.” ―Michael Jordan",
            "“It's not the load that breaks you down, it's the way you carry it.” ―Lou Holtz",
            "“Leaders can let you fail and yet not let you be a failure.” ―Stanley McChrystal",
            "“The hard days are what make you stronger.” ―Aly Raisman",
            "“If you believe it'll work out, you'll see opportunities. If you don't believe it'll work out, you'll see obstacles.” ―Wayne Dyer",
            "“You can waste your lives drawing lines. Or you can live your life crossing them.” ―Shonda Rhimes",
            "“You've got to get up every morning with determination if you're going to go to bed with satisfaction.” ―George Lorimer",
            "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.” ―Roy T. Bennett",
            "“Don't say you don't have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein.” ―H. Jackson Brown Jr.",
            "“Opportunity is missed by most people because it is dressed in overalls and looks like work.” ―Thomas Edison",
            "“The only difference between ordinary and extraordinary is that little extra.” ―Jimmy Johnson",
            "“Never stop doing your best just because someone doesn't give you credit.” ―Kamari aka Lyrikal",
            "“Work hard for what you want because it won't come to you without a fight. You have to be strong and courageous and know that you can do anything you put your mind to. If somebody puts you down or criticizes you, just keep on believing in yourself and turn it into something positive.” ―Leah LaBelle",
            "“The miracle is not that we do this work, but that we are happy to do it.” ―Mother Teresa",
            "“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.” ―Earl Nightingale",
            "If you work on something a little bit every day, you end up with something that is massive.” ―Kenneth Goldsmith",
            "“The big secret in life is that there is no secret. Whatever your goal, you can get there if you're willing to work.” ―Oprah Winfrey",
            "“If you cannot do great things, do small things in a great way.” ―Napoleon Hill",
            "“Never allow a person to tell you no who doesn't have the power to say yes.” ―Eleanor Roosevelt",
            "“At any given moment you have the power to say: this is not how the story is going to end.” ―Unknown",
            "“Don't limit your challenges. Challenge your limits.”",
            "“Whenever you find yourself doubting how far you can go, just remember how far you have come.”",
            "“Good. Better. Best. Never let it rest. 'Til your good is better and your better is best.” ―St. Jerome."
        ];

        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    // Update the quote element in the popup 
    function updateQuote() {
        const quoteElement = document.getElementById("quote");
        const quote = fetchMotivationalQuote();
        quoteElement.textContent = quote;
    }

    // Call the updateQuote function when the popup is opened or refreshed
    updateQuote();

    // Event listener to the button
    const refreshButton = document.getElementById("refreshButton");
    refreshButton.addEventListener("click", updateQuote);
});

