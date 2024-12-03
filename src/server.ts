import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000; // Use Render's PORT environment variable

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
