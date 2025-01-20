const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; // Use port 4000 or any other port

app.get('/', (req, res) => {
    res.send('Hello, Speedum!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
