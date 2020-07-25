import 'dotenv/config';
import express from "express";
import cors from 'cors';

const port = process.env.PORT || 8000;
const app = express();

// Autoriser l'accès navigateur aux users
app.use(cors());

// Fichier public pour les assets
app.use(express.static(__dirname + '/public'));

// définir le moteur de modèle sur ejs
app.set('view engine', 'ejs');

// Création de la route
app.get('/', (request, response) => {
    response.render('index')
})

// Port d'écoute
app.listen(port, () => {
    console.log("md-tool listening on port http://localhost:" + port);
})
