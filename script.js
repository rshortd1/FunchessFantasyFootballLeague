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