// JavaScript code to change background image and text content based on URL

// Function to change the background image and text content
function updatePageContent() {
    // Get the current URL
    var currentURL = window.location.href;

    // Select the elements with the class .md-header and .md-tabs
    var elements = document.querySelectorAll('.md-header, .md-tabs');

    // Select the element with the class .md-ellipsis
    var ellipsisSpan = document.querySelector('.md-ellipsis');

    // Variables for background image and text content
    var backgroundImage = '';
    var textContent = '';

    // Determine which background image and text content to use based on the URL
    if (currentURL.includes('guide')) {
        backgroundImage = "url('/en/nightly/assets/backgroundnightly.jpg')";
        textContent = "Kometa Nightly Wiki";
    } else if (currentURL.includes('develop')) {
        backgroundImage = "url('/en/nightly/assets/backgrounddevelop.jpg')";
        textContent = "Kometa Develop Wiki";
    } else {
        // Default values if neither "guide" nor "develop" is found in the URL
        backgroundImage = "url('/assets/background.jpg')";
        textContent = "Kometa Wiki";
    }

    // Update the background image of the selected elements
    elements.forEach(function(element) {
        element.style.backgroundImage = backgroundImage;
    });

    // Update the text content of the .md-ellipsis element
    if (ellipsisSpan) {
        ellipsisSpan.textContent = textContent;
    }
}

// Call the function to update the page content
updatePageContent();
