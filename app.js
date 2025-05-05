const express = require('express');
const app = express();
const port = 3000;

let pastes = []; // In-memory storage for pastes

app.use(express.json());
app.use(express.static('public')); // Serve static files (like HTML, CSS, JS)

app.post('/paste', (req, res) => {
    const pasteContent = req.body.content;
    if (!pasteContent) {
        return res.status(400).send('Content is required');
    }
    
    const paste = {
        id: pastes.length + 1,
        content: pasteContent,
    };
    
    pastes.push(paste);
    res.status(201).send(paste);
});

app.get('/pastes', (req, res) => {
    res.json(pastes);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
