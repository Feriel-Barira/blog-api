# 📝 Blog API

Une API RESTful simple pour un système de blog développée avec **Node.js**, **Express**, **MongoDB** et **JWT**.  
Elle permet à des utilisateurs de s'inscrire, se connecter, créer des articles, commenter et supprimer leurs contenus.

---

## 🚀 Fonctionnalités

- 🔐 Authentification via JWT
- ✍️ Création, modification et suppression de posts (par leur auteur)
- 💬 Ajout, modification et suppression de commentaires (par leur auteur)
- 🧼 Suppression automatique des commentaires lors de la suppression d’un post
- 🔎 Récupération de tous les posts avec auteurs et commentaires

---

## 🧱 Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [dotenv](https://github.com/motdotla/dotenv)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

---

## ⚙️ Installation

### 1. Cloner le projet
git clone https://github.com/Feriel-Barira/blog-api.git
cd blog-api
## 2. Installer les dépendances
npm install
### 3. Créer un fichier .env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/blog-api
JWT_SECRET=tonSecretUltraSecret
### 4. Lancer le serveur
node src/server.js
