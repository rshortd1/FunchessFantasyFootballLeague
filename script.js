function addPost() {
    const newPostContent = document.getElementById('newPost').value;
    if (newPostContent.trim() === "") {
        alert("Please write something before posting.");
        return;
    }

    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.textContent = newPostContent;

    document.getElementById('posts').appendChild(postDiv);
    document.getElementById('newPost').value = "";
}

function addGuestbookEntry() {
    const name = document.getElementById('guestName').value;
    const message = document.getElementById('guestMessage').value;
    const entryDiv = document.createElement('div');
    entryDiv.className = 'guestbookEntry';
    entryDiv.innerHTML = `<strong>${name}:</strong> <p>${message}</p>`;
    document.getElementById('guestbookEntries').appendChild(entryDiv);
}
