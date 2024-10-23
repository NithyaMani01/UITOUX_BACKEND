const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const homeRoutes = require('./routes/homeRoutes');
const cors = require('cors');
const { createDB } = require('./repository/repository');

dotenv.config();
connectDB();

async function createIntialDB() {
    await createDB();
}

createIntialDB();

const app = express();
app.use(express.json());

const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));

// Define routes
app.use('/api/home', homeRoutes);

module.exports = app;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});