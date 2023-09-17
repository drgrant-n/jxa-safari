// An alternative way to do the same as main01.js
function run(input, parameters) {
    const browser = Application("Safari");
    // browser.activate(); // Activate Safari
    
    const frontWindow = browser.windows[0];
    const newTab = browser.Tab(); // Create a new empty tab
    frontWindow.tabs.push(newTab);
    
    frontWindow.currentTab = newTab; // Switch to the new tab
    newTab.url = "https://www.bbc.com/weather/" + input[0]; // Set the URL
}
