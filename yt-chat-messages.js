// Capture YT live stream messages from the browser

let messages = document.getElementsByClassName('yt-live-chat-text-message-renderer')

// Uncomment to view the raw output of a YT chat message innerText
// for (let i = 0; i < messages.length; i++) {
//     console.log(ms[i].innerText)
// }

// This drills down to the last line of the element's message lines, 
// which is the actual message, and messageArray will contain all the
// message strings without other metadata

for (let i = 0; i < ms.length; i++) {
    let message = ms[i].innerText.split('\n').reverse()
    message = message.filter(m => m.length > 1)

    if (message.length === 2) {
        messageArray.push(message[0])
    }
}

