import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

// Create backend app
const app = express();




app.use(bodyParser.json({limit : "100mb", extended: "true"}));
app.use(cors());

//Register routes

app.use('/posts', postRoutes);

// Set up database connection 
const CONNECTION_URL = 'mongodb+srv://finbiess:yBUet5MO,123@cluster0.o8cez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => 
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    )
    .catch((error) => console.log(error.message))

    mongoose.set('useFindAndModify', false);