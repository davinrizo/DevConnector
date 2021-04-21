const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB();

app.get('/', (req, res) => res.send('API running'));

//init Middleware
app.use(express.json({ extended: false }));

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 6666;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
