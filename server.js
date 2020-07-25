import 'dotenv/config';
import express from "express";
import cors from 'cors';

const app = express();

// Autoriser l'accèsnavigateur aux users
app.use(cors());

// Création de la route
app.get('/', (request, response) => {
    response.send("Hello App !")
})

// Port d'écoute
app.listen(process.env.PORT, () => {
    console.log("md-tool listening on port " + process.env.PORT);
})
