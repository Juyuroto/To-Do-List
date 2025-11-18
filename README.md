# To-Do-List
### Archi code
```markdown
TO-DO-LIST/
├─ backend/
│  ├─ node_modules/
│  ├─ src/
│  │  ├─ config/
│  │  ├─ middleware/
│  │  ├─ routes/
│  │  ├─ app.js
│  │  └─ index.js
│  ├─ package.json
│  ├─ package-lock.json
│  └─ Dockerfile
├─ frontend/
│  ├─ node_modules/
│  ├─ public/
│  │  └─ logo.svg
│  ├─ src/
│  │  ├─ Context/
│  │  │  └─ AuthContext.jsx
│  │  ├─ log/
│  │  │  ├─ App.js
│  │  │  ├─ HomePage.jsx
│  │  │  ├─ Login.css
│  │  │  ├─ Login.jsx
│  │  │  └─ signup.jsx
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  ├─ ToDoList.jsx
│  │  └─ index.css
│  ├─ package.json
│  ├─ dockerfile
│  ├─ vite.config.js
│  ├─ index.html
│  └─ eslint.config.js
├─ .env
├─ .gitignore
├─ docker-compose.yml
└─ README.md
```

### Installation
#### Dans le folder backend
```bash
npm install
npm init -y
npm install express@5.1.0 body-parser@2.2.0 cors@2.8.5 dotenv@17.2.3 mysql@2.18.1
```
#### Dans le folder frontend

```bash
npm init -y
npm install react@^19.2.0 react-dom@^19.2.0 react-router-dom@^7.9.5
npm install --save-dev vite@^7.2.2 @vitejs/plugin-react@^5.1.0
npm run dev
```

#### Création du .env
```bash
touch .env
```

#### Dans le .env
```env
NODE_ENV= ????
PORT= ????

# MySQL
DB_HOST= ????
DB_USER= ????
DB_PASSWORD= ????
DB_NAME= ????

# Frontend
FRONT_PORT= ????

# phpMyAdmin
PMA_PORT= ????
```

### Explication folder

📂 backend/

Contient tout le code du serveur, de l’API et de la base de données.

📁 node_modules/

Dépendances installées via npm install.
(Ne doit jamais être modifié manuellement.)

📁 src/

Code source principal du backend.

📁 config/

Contient les fichiers de configuration, notamment la base de données.

e-todo.sql
Script SQL permettant d’initialiser ou recréer la base de données SQLite (tables, champs, etc.).

📁 middleware/

Dossier réservé aux middlewares Express (authentification, logs, validation…).
(Le contenu dépend du projet.)

📁 routes/

Contient les routes Express de l’API, organisées par fonctionnalités.

app.js

Fichier qui configure l’application Express : middlewares, routes, connexion DB…
C’est le cœur de la logique backend.

dockerfile

Fichier permettant de construire une image Docker du backend.
Il décrit comment le serveur doit être installé et lancé dans un conteneur.

index.js

Point d’entrée du backend.
C’est lui qui démarre le serveur (ex: app.listen(...)).

package.json

Liste les dépendances, scripts NPM, et métadonnées du backend.

package-lock.json

Fichier généré automatiquement par npm pour verrouiller les versions exactes des dépendances.

📂 frontend/

Contient le code de l’interface utilisateur.

📁 node_modules/

Dépendances du frontend installées via npm.

📁 public/

Dossier contenant les fichiers accessibles publiquement (images, icônes…).
Servi directement par Vite.

📁 src/

Code source du frontend (JS, CSS, composants, logique de l'app…).

.dockerignore

Liste les fichiers à exclure lors de la création de l’image Docker du frontend.

dockerfile

Fichier Docker utilisé pour builder le frontend en production.

eslint.config.js

Configuration du linter ESLint pour assurer une qualité de code constante.

index.html

Page HTML principale du projet frontend (point d'entrée de l’interface).

package.json

Liste les dépendances, scripts et métadonnées du frontend.

vite.config.js

Configuration du bundler Vite (proxy, build, ports…).

🛠️ Fichiers à la racine
.env

Fichier contenant les variables d’environnement (ports, secrets, config DB…).
Non versionné pour la sécurité.

.gitignore

Indique quels fichiers Git doit ignorer (node_modules/, .env, etc.).

docker-compose.yml

Fichier permettant de lancer tous les services (backend, frontend, base de données) en une seule commande avec Docker.

README.md

Documentation du projet.