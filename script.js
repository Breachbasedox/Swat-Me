document.addEventListener("DOMContentLoaded", function() {
    const pasteForm = document.getElementById('pasteForm');
    const pasteContent = document.getElementById('pasteContent');
    const pasteList = document.getElementById('pasteList');

    // Fetch and display pastes when the page loads
    fetch('/pastes')
        .then(response => response.json())
        .then(data => {
            data.forEach(paste => {
                const pasteItem = document.createElement('li');
                pasteItem.textContent = paste.content;
                pasteList.appendChild(pasteItem);
            });
        });

    // Handle form submission to create a new paste
    pasteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const content = pasteContent.value.trim();
        if (content) {
            fetch('/paste', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content }),
            })
            .then(response => response.json())
            .then(data => {
                const pasteItem = document.createElement('li');
                pasteItem.textContent = data.content;
                pasteList.appendChild(pasteItem);
                pasteContent.value = ''; // Clear textarea
            });
        }
    });
});
