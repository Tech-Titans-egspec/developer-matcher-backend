import { config } from 'dotenv';
import connectDB from './src/config/db.js';
import { app} from './src/app.js';

config();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
