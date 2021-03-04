// Make sure it is object-oriented, PLEASE!!!

// Array below
const chats = {};
const users = [];
let currentChat;

// Objects below
const chat = new Chat('Friends');
chats[chat.id] = chat;
currentChat = chat;
const user1 = new User('brent-0119');
const user2 = new User('peter-paul-mary1');
users.push(user1, user2);
const message = new Message('Hello, are you listening?!', user1.username);
currentChat.addMessage(message);

document.getElementById('new-chat-button').addEventListener('click', addNewChat);
document.getElementById('new-chat-input').addEventListener('keydown', (event) => {
if(event.key == 'Enter') {
    addNewChat();
}
});

print();

function print() {
    //lists
    let chatsHtml = '';
    // choose which iteration format (of the two -- for in loop or forEach) you want below in your program
    // for in loop way
    for (let chatId in chats) {
        chatsHtml += `<li class="list-group-item">${chats[chatId].name}</li>`;
    }
    // forEach on the values way this is the preferred way for more complex applications
    // Object.values(chats).forEach((chat) => {
    //     chatsHtml +=  `<li class="list-group-item" onclick ="selectCurrentChat('${chat.id}')'>${chat.name}</li>`;
    // });
    document.getElementById('chats').innerHTML = chatsHtml;
    // current chat name
    document.getElementById('current-chat-name').innerText = currentChat.name;
    // current message window
    let chatWindowHtml = '';
    currentChat.messages.forEach((message) => {
        chatWindowHtml += `
        <div class="message">
        <p>${message.text}</p>
        <p>${message.username}</p>
        <div>`;
    });
    document.getElementById('chat-window').innerHTML = chatWindowHtml;

    }
    //users
    let usersHtml = '';
    users.forEach(user => {
        usersHtml += `
        <div>
        <label for="${user.username}"></label>
        <input id="${user.username}">
        <button onclick='addNewMessage("${currentChat.id}", "${user.username}")' class = "btn btn-primary"></button>
        </div>`;
    });
    document.getElementById('users').innerHTML = usersHtml;
}

function addNewChat() {
    const chatName = document.getElementById('new-chat-input').value;
    if (chatName) {
        // create the chat
        const newChat = new Chat(chatName);
        // add chat to chats
        chats[newChat.id] = new Chat;
        // clear out the input box
        document.getElementById('new-chat-input').value = '';
        // print again
        print();

    }
}

function addNewMessage (chatId, username) {
    const text = document.getElementById(username).value;
    const newMessage = new Message(text, username);
    chats[shatId].addMessage(newMessage);
    print();
}

function selectCurrentChat(chatId) {
    currentChat = chats[chatId];
    // print again
    print();
}

// comment