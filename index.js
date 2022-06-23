require('dotenv').config();

const app = require('./app');

const port = process.env.PORT || 5100;

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
