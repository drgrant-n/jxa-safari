function run(input, parameters) {
// Webkit-based browsers
// Other examples include "Safari Technology Preview"

const browser = Application("Safari")
const newTab = browser.Tab({ url: "https://www.bbc.com/weather/146175" })
const frontWindow = browser.windows[0]
frontWindow.tabs.push(newTab) // Open in background
frontWindow.currentTab = newTab // Switch to tab in background
}
